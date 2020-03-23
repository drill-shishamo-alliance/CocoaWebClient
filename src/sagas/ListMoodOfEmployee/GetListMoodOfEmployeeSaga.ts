import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { call, put, select } from 'redux-saga/effects';
import { getListMoodOfEmployeeOnAjax } from 'src/apis/ListMoodOfEmployee/GetListMoodOfEmployeeOnAjax';

import listMoodOfEmployeeState, {
  PunchLog,
} from 'src/states/ListMoodOfEmployee/ListMoodOfEmployee';
import convertUnixToDate from 'src/utilsLogic/Date/ConvertUnixtoDate';
import RootState from 'src/states';

export function* getListMoodOfEmployeeSaga(
  action: ReturnType<typeof getListMoodOfEmployee.request>
) {
  try {
    const response: PromiseGenericType<ReturnType<typeof getListMoodOfEmployeeOnAjax>> = yield call(
      getListMoodOfEmployeeOnAjax,
      {
        department_id: action.payload.department_id,
        begin_date: action.payload.begin_date,
        end_date: action.payload.end_date,
      }
    );
    if (response.status === 200 && response.data) {
      // 受け取ったデータを 1.unixからDateに変換 2.気分がよくない人順に並べ替え 3.気分状態が危険かどうかを判定するフラグを追加 してからStoreに保存する
      const state: RootState = yield select();
      const moods = state.MoodsState;
      const reorderParams: { employee_id: number; mood_weight_average: number }[] = [];
      let convertDateData: listMoodOfEmployeeState = {};
      const dangerLine = 2.5;

      response.data.forEach(moodOfEmployee => {
        // ここで 1.並べ替えのためのパラメータ作成 2.unixからDateに変換 を行う
        let mood_weight_sum = 0;
        let denominator = 0;
        let punchedDates: PunchLog[] = [];
        moodOfEmployee.punch_logs.forEach(punch_log => {
          punchedDates.push({
            mood_id: punch_log.mood_id,
            cause_ids: punch_log.cause_ids,
            punched_at: convertUnixToDate(punch_log.punched_at),
          });
          if (moods[punch_log.mood_id].name !== '未入力') {
            // 未入力の場合は除外する
            denominator += 1;
            mood_weight_sum += moods[punch_log.mood_id].weight;
          }
        });
        convertDateData = {
          ...convertDateData,
          [moodOfEmployee.employee_id]: {
            employee_id: moodOfEmployee.employee_id,
            punch_logs: punchedDates,
            is_danger: false,
          },
        };
        reorderParams.push({
          employee_id: moodOfEmployee.employee_id,
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
        // 3. 気分状態が危険かどうかのフラグを設定
        if (param.mood_weight_average < dangerLine) {
          postDataToStore = {
            ...postDataToStore,
            [param.employee_id]: {
              ...convertDateData[param.employee_id],
              is_danger: true,
            },
          };
        } else {
          postDataToStore = {
            ...postDataToStore,
            [param.employee_id]: {
              ...convertDateData[param.employee_id],
            },
          };
        }
      });
      yield put(getListMoodOfEmployee.success(postDataToStore));
    } else {
      yield put(getListMoodOfEmployee.success({}));
    }
  } catch (e) {
    yield put(getListMoodOfEmployee.failure(new Error(e)));
  }
}
