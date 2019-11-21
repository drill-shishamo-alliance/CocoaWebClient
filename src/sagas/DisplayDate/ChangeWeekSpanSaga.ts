import {
  changeWeekSpanButtonClicked,
  updateDisplaySpan,
} from 'src/actions/DisplayDate/DisplayDateActionCreator';
import { put, select } from 'redux-saga/effects';
import RootState from 'src/states';
import getWeekOfMonth from 'src/utilsLogic/Date/GetWeekOfMonth';
import convertDateToUnix from 'src/utilsLogic/Date/ConvertDateToUnix';
import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';

export function* changeWeekSpanSaga(action: ReturnType<typeof changeWeekSpanButtonClicked>) {
  yield put(action.payload()); // 表示するさせる週を更新するためのアクション発火
  const state: RootState = yield select(); // アクション発火後のStateを取得
  const displayDate = new Date(state.displayDateState.displayDate);
  const weekIndex = state.displayDateState.weekIndex;

  const newDisplaySpan = getWeekOfMonth(displayDate, weekIndex);
  const beginDate = convertDateToUnix(newDisplaySpan[0]);
  const endDate = convertDateToUnix(newDisplaySpan[newDisplaySpan.length - 1]);

  yield put(updateDisplaySpan({ displaySpan: newDisplaySpan }));
  yield put(getListMoodOfEmployee.request({ beginDate, endDate }));
}
