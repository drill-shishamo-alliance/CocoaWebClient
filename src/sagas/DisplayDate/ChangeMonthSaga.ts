import {
  changeMonthButtonClicked,
  updateDisplaySpan,
} from 'src/actions/DisplayDate/DisplayDateActionCreator';
import { put, select } from 'redux-saga/effects';
import RootState from 'src/states';
import getBeginAndEndDateFromMonth from 'src/utilsLogic/Date/GetBeginAndEndDateFromMonth';
import {
  getListMoodOfEmployee,
  resetListMoodOfEmployee,
} from 'src/actions/ListMoodOfEmployee/ActionCreator';
import getMonthDates from 'src/utilsLogic/Date/GetMonthDates';
import { getListMoodOfDepartment } from 'src/actions/ListMoodOfDepartment/ActionCreator';

export function* changeMonthSaga(action: ReturnType<typeof changeMonthButtonClicked>) {
  yield put(action.payload()); // 表示させる月を更新するためのアクション発火
  const state: RootState = yield select(); // アクション発火後のStateを取得
  const displayMonday = new Date(state.displayDateState.displayMonday);
  const beginAndEndDate = getBeginAndEndDateFromMonth(displayMonday);
  const begin_date = beginAndEndDate.beginDate;
  const end_date = beginAndEndDate.endDate;
  const newDisplaySpan = getMonthDates(displayMonday);
  const employees = state.Employees;

  yield put(updateDisplaySpan({ displaySpan: newDisplaySpan }));
  yield put(resetListMoodOfEmployee());
  Object.values(employees).forEach(function*(employee) {
    yield put(getListMoodOfEmployee.request({ employee_id: employee.id, begin_date, end_date }));
  });
  yield put(getListMoodOfDepartment.request({ department_id: 1, begin_date, end_date }));
}
