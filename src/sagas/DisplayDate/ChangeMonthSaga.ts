import {
  changeMonthButtonClicked,
  updateDisplaySpan,
} from 'src/actions/DisplayDate/DisplayDateActionCreator';
import { put, select } from 'redux-saga/effects';
import RootState from 'src/states';
import getBeginAndEndDateFromMonth from 'src/utilsLogic/Date/GetBeginAndEndDateFromMonth';
import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';
import getMonthDates from 'src/utilsLogic/Date/GetMonthDates';

export function* changeMonthSaga(action: ReturnType<typeof changeMonthButtonClicked>) {
  yield put(action.payload()); // 表示させる月を更新するためのアクション発火
  const state: RootState = yield select(); // アクション発火後のStateを取得
  const displayDate = new Date(state.displayDateState.displayDate);
  const beginAndEndDate = getBeginAndEndDateFromMonth(displayDate);
  const begin_date = beginAndEndDate.beginDate;
  const end_date = beginAndEndDate.endDate;
  const newDisplaySpan = getMonthDates(displayDate);

  yield put(updateDisplaySpan({ displaySpan: newDisplaySpan }));
  yield put(getListMoodOfEmployee.request({ employee_id: 'hoge', begin_date, end_date }));
}
