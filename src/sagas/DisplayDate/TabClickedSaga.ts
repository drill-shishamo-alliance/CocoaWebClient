import {
  tabClicked,
  updateDisplaySpan,
  updateDisplayTab,
} from 'src/actions/DisplayDate/DisplayDateActionCreator';
import { put, select } from 'redux-saga/effects';
import RootState from 'src/states';
import { tabName } from 'src/states/DisplayDate/DisplayDate';
import getBeginAndEndDateFromMonth from 'src/utilsLogic/Date/GetBeginAndEndDateFromMonth';
import {
  getListMoodOfEmployee,
  resetListMoodOfEmployee,
} from 'src/actions/ListMoodOfEmployee/ActionCreator';
import getWeekOfMonth from 'src/utilsLogic/Date/GetWeekOfMonth';
import convertDateToUnix from 'src/utilsLogic/Date/ConvertDateToUnix';
import getMonthDates from 'src/utilsLogic/Date/GetMonthDates';
import { getListMoodOfDepartment } from 'src/actions/ListMoodOfDepartment/ActionCreator';

export function* tabClickedSaga(action: ReturnType<typeof tabClicked>) {
  yield put(updateDisplayTab({ displayTab: action.payload.tabName }));
  const state: RootState = yield select();
  const displayTab = state.displayDateState.displayTab;
  const displayMonday = new Date(state.displayDateState.displayMonday);
  const department_id = state.UserState.departmentId;

  if (displayTab === tabName.week) {
    const weekIndex = state.displayDateState.weekIndex;
    const newDisplaySpan = getWeekOfMonth(displayMonday, weekIndex);
    const begin_date = convertDateToUnix(newDisplaySpan[0]);
    const end_date = convertDateToUnix(newDisplaySpan[newDisplaySpan.length - 1]);

    yield put(updateDisplaySpan({ displaySpan: newDisplaySpan }));

    yield put(getListMoodOfDepartment.request({ department_id: 1, begin_date, end_date }));
  } else if (displayTab === tabName.month) {
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
}
