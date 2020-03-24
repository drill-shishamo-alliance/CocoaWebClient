import {
  tabClicked,
  updateDisplaySpan,
  updateDisplayTab,
} from 'src/actions/DisplayDate/DisplayDateActionCreator';
import { put, select } from 'redux-saga/effects';
import RootState from 'src/states';
import { tabName } from 'src/states/DisplayDate/DisplayDate';
import getWeekOfMonth from 'src/utilsLogic/Date/GetWeekOfMonth';
import getMonthDates from 'src/utilsLogic/Date/GetMonthDates';
import { getListMoodOfDepartment } from 'src/actions/ListMoodOfDepartment/ActionCreator';
import {
  convertDateToUnixForBegin,
  convertDateToUnixForEnd,
} from 'src/utilsLogic/Date/ConvertDateToUnix';

export function* tabClickedSaga(action: ReturnType<typeof tabClicked>) {
  yield put(updateDisplayTab({ displayTab: action.payload.tabName }));
  const state: RootState = yield select();
  const displayTab = state.displayDateState.displayTab;
  const displayMonday = new Date(state.displayDateState.displayMonday);

  if (displayTab === tabName.week) {
    const weekIndex = state.displayDateState.weekIndex;
    const newDisplaySpan = getWeekOfMonth(displayMonday, weekIndex);
    const begin_date = convertDateToUnixForBegin(newDisplaySpan[0]);
    const end_date = convertDateToUnixForEnd(newDisplaySpan[newDisplaySpan.length - 1]);

    yield put(updateDisplaySpan({ displaySpan: newDisplaySpan }));

    yield put(getListMoodOfDepartment.request({ department_id: 1, begin_date, end_date }));
  } else if (displayTab === tabName.month) {
    const newDisplaySpan = getMonthDates(displayMonday);
    yield put(updateDisplaySpan({ displaySpan: newDisplaySpan }));
  }
}
