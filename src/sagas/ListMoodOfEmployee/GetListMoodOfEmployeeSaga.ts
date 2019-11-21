import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { call, put } from 'redux-saga/effects';
import { getListMoodOfEmployeeClient } from 'src/apis/ListMoodOfEmployee/GetListMoodOfEmployee';
import listMoodOfEmployeeState from 'src/apis/ListMoodOfEmployee/Model';
import { PunchedMood } from 'src/states/ListMoodOfEmployee/ListMoodOfEmployee';
import convertUnixToDate from 'src/utilsLogic/Date/ConvertUnixtoDate';

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
    // punched_atがunixで送られてくるため、それをDate型に変換してからStoreに保存させる
    let convertDateData: listMoodOfEmployeeState = {};
    Object.entries(response.data).forEach(([key, value]) => {
      let punchedDates: PunchedMood[] = [];
      value.moods.forEach(mood => {
        punchedDates.push({
          id: mood.id,
          punched_at: convertUnixToDate(mood.punched_at),
        });
      });
      convertDateData = {
        ...convertDateData,
        [key]: {
          subordinate_id: value.sabordinate_id,
          moods: punchedDates,
        },
      };
    });
    yield put(getListMoodOfEmployee.success(convertDateData));
  } else {
    yield put(getListMoodOfEmployee.failure(new Error('getListMoodOfEmployee error')));
  }
}
