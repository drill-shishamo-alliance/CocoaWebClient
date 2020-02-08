import {
  tabClicked,
  updateDisplaySpan,
  updateDisplayTab,
} from 'src/actions/DisplayDate/DisplayDateActionCreator';
import { put, select } from 'redux-saga/effects';
import RootState from 'src/states';
import { tabName } from 'src/states/DisplayDate/DisplayDate';
import getBeginAndEndDateFromMonth from 'src/utilsLogic/Date/GetBeginAndEndDateFromMonth';
import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';
import getWeekOfMonth from 'src/utilsLogic/Date/GetWeekOfMonth';
import convertDateToUnix from 'src/utilsLogic/Date/ConvertDateToUnix';
import getMonthDates from 'src/utilsLogic/Date/GetMonthDates';
import { getListMoodOfDepartment } from 'src/actions/ListMoodOfDepartment/ActionCreator';

export function* tabClickedSaga(action: ReturnType<typeof tabClicked>) {
  yield put(updateDisplayTab({ displayTab: action.payload.tabName }));
  const state: RootState = yield select();
  const displayTab = state.displayDateState.displayTab;
  const displayDate = new Date(state.displayDateState.displayDate);

  if (displayTab === tabName.week) {
    const weekIndex = state.displayDateState.weekIndex;
    const newDisplaySpan = getWeekOfMonth(displayDate, weekIndex);
    const begin_date = convertDateToUnix(newDisplaySpan[0]);
    const end_date = convertDateToUnix(newDisplaySpan[newDisplaySpan.length - 1]);

    yield put(updateDisplaySpan({ displaySpan: newDisplaySpan }));
    yield put(getListMoodOfEmployee.request({ employee_id: 'hoge', begin_date, end_date }));
    yield put(getListMoodOfDepartment.request({ department_id: 'hoge', begin_date, end_date }));
  } else if (displayTab === tabName.month) {
    const beginAndEndDate = getBeginAndEndDateFromMonth(displayDate);
    const begin_date = beginAndEndDate.beginDate;
    const end_date = beginAndEndDate.endDate;
    const newDisplaySpan = getMonthDates(displayDate);

    yield put(updateDisplaySpan({ displaySpan: newDisplaySpan }));
    yield put(getListMoodOfEmployee.request({ employee_id: 'hoge', begin_date, end_date }));
    yield put(getListMoodOfDepartment.request({ department_id: 'hoge', begin_date, end_date }));
  }
}
