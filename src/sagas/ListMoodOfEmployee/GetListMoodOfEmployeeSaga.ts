import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { call, put, select } from 'redux-saga/effects';
import { getListMoodOfEmployeeClient } from 'src/apis/ListMoodOfEmployee/GetListMoodOfEmployee';

import listMoodOfEmployeeState, {
  PunchLog,
} from 'src/states/ListMoodOfEmployee/ListMoodOfEmployee';
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
    const reorderParams: { employeeId: string; mood_weight_average: number }[] = [];
    let convertDateData: listMoodOfEmployeeState = {};
    const dangerLine = 2.5;
    Object.entries(response.data).forEach(([key, value]) => {
      // ここで 1.並べ替えのためのパラメータ作成 2.unixからDateに変換 を行う
      let mood_weight_sum = 0;
      let denominator = 0;
      let punchedDates: PunchLog[] = [];
      value.punch_logs.forEach(punch_log => {
        punchedDates.push({
          mood_id: punch_log.mood_id,
          cause_id: punch_log.cause_id,
          punched_at: convertUnixToDate(punch_log.punched_at),
        });
        if (punch_log.mood_id !== 'moodId0') {
          // 未入力の場合は除外する
          denominator += 1;
          mood_weight_sum += moods[punch_log.mood_id].weight;
        }
      });
      convertDateData = {
        ...convertDateData,
        [key]: {
          subordinate_id: value.sabordinate_id,
          punch_logs: punchedDates,
          danger: false,
        },
      };
      reorderParams.push({
        employeeId: value.sabordinate_id,
        mood_weight_average: mood_weight_sum / denominator,
      });
    });
    reorderParams.sort(function(prevParam, nextParam) {
      if (prevParam.mood_weight_average < nextParam.mood_weight_average) return -1;
      if (prevParam.mood_weight_average > nextParam.mood_weight_average) return 1;
      return 0;
    });

    let postDataToStore: listMoodOfEmployeeState = {};
    reorderParams.forEach(param => {
      if (param.mood_weight_average < dangerLine) {
        postDataToStore = {
          ...postDataToStore,
          [param.employeeId]: {
            ...convertDateData[param.employeeId],
            danger: true,
          },
        };
      } else {
        postDataToStore = {
          ...postDataToStore,
          [param.employeeId]: {
            ...convertDateData[param.employeeId],
          },
        };
      }
    });
    yield put(getListMoodOfEmployee.success(postDataToStore));
  } else {
    yield put(getListMoodOfEmployee.failure(new Error('getListMoodOfEmployee error')));
  }
}
