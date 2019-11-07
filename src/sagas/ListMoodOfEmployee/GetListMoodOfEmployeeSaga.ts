import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import { call, put, select } from 'redux-saga/effects';
import { getListMoodOfEmployeeClient } from 'src/apis/ListMoodOfEmployee/GetListMoodOfEmployee';
import { ChangeDateSpanButtonClicked } from 'src/actions/CurrentDisplayedDate/CurrentDisplayedDateActionCreator';
import RootState from 'src/states';

export function* calculateSpanSaga(action: ReturnType<typeof ChangeDateSpanButtonClicked>) {
  yield put(action.payload());
  const state: RootState = yield select();
  const displayDate = state.displayDateState.displayDate;

  const beginDate: Date = Object.assign(displayDate);
  beginDate.setDate(1);
  const endDate: Date = Object.assign(beginDate);
  endDate.setMonth(beginDate.getMonth() + 1);
  endDate.setDate(0);

  yield put(getListMoodOfEmployee.request({ beginDate, endDate }));
}

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
    yield put(getListMoodOfEmployee.success(response.data));
  } else {
    yield put(getListMoodOfEmployee.failure(new Error('getListMoodOfEmployee error')));
  }
}
