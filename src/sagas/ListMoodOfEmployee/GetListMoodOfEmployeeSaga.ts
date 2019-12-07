import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { call, put, select } from 'redux-saga/effects';
import { getListMoodOfEmployeeClient } from 'src/apis/ListMoodOfEmployee/GetListMoodOfEmployee';
import listMoodOfEmployeeState from 'src/apis/ListMoodOfEmployee/Model';
import { PunchedMood } from 'src/states/ListMoodOfEmployee/ListMoodOfEmployee';
import convertUnixToDate from 'src/utilsLogic/Date/ConvertUnixtoDate';
import RootState from 'src/states';

export function* getListMoodOfEmployeeSaga(
  action: ReturnType<typeof getListMoodOfEmployee.request>
) {
  const response: PromiseGenericType<ReturnType<typeof getListMoodOfEmployeeClient>> = yield call(
    getListMoodOfEmployeeClient,
    {
      employeeId: 'hoge',
      beginDate: action.payload.beginDate,
      endDate: action.payload.endDate,
    }
  );
  if (response.status === 200 && response.data) {
    // 受け取ったデータを 1.unixからDateに変換 2.気分がよくない人順に並べ替え 3.気分状態が危険かどうかを判定するフラグを追加 してからStoreに保存する
    const state: RootState = yield select();
    const moods = state.MoodsState;
    const reorderParams: { employeeId: string; mood_weight_sum: number }[] = [];
    let convertDateData: listMoodOfEmployeeState = {};
    Object.entries(response.data).forEach(([key, value]) => {
      // ここで 1.並べ替えのためのパラメータ, 2.unixからDateに変換 を行う
      let mood_weight_sum = 0;
      let punchedDates: PunchedMood[] = [];
      value.moods.forEach(mood => {
        punchedDates.push({
          id: mood.id,
          punched_at: convertUnixToDate(mood.punched_at),
        });
        mood_weight_sum += moods[mood.id].weight;
      });
      convertDateData = {
        ...convertDateData,
        [key]: {
          subordinate_id: value.sabordinate_id,
          moods: punchedDates,
        },
      };
      reorderParams.push({ employeeId: value.sabordinate_id, mood_weight_sum });
    });
    reorderParams.sort(function(prevParam, nextParam) {
      if (prevParam.mood_weight_sum < nextParam.mood_weight_sum) return -1;
      if (prevParam.mood_weight_sum > nextParam.mood_weight_sum) return 1;
      return 0;
    });
    let postDataToStore: listMoodOfEmployeeState = {};
    reorderParams.forEach(param => {
      console.log(param.employeeId);
      postDataToStore = {
        ...postDataToStore,
        [param.employeeId]: {
          ...convertDateData[param.employeeId],
        },
      };
      console.log(postDataToStore);
    });
    yield put(getListMoodOfEmployee.success(postDataToStore));
  } else {
    yield put(getListMoodOfEmployee.failure(new Error('getListMoodOfEmployee error')));
  }
}
