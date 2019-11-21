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

export function* tabClickedSaga(action: ReturnType<typeof tabClicked>) {
  yield put(updateDisplayTab({ displayTab: action.payload.tabName }));
  const state: RootState = yield select();
  const displayTab = state.displayDateState.displayTab;
  const displayDate = new Date(state.displayDateState.displayDate);

  if (displayTab === tabName.week) {
    const weekIndex = state.displayDateState.weekIndex;
    const newDisplaySpan = getWeekOfMonth(displayDate, weekIndex);
    const beginDate = convertDateToUnix(newDisplaySpan[0]);
    const endDate = convertDateToUnix(newDisplaySpan[newDisplaySpan.length - 1]);

    yield put(updateDisplaySpan({ displaySpan: newDisplaySpan }));
    yield put(getListMoodOfEmployee.request({ beginDate, endDate }));
  } else if (displayTab === tabName.month) {
    const beginAndEndDate = getBeginAndEndDateFromMonth(displayDate);

    yield put(getListMoodOfEmployee.request(beginAndEndDate));
  }
}
