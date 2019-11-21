import { changeMonthButtonClicked } from 'src/actions/DisplayDate/DisplayDateActionCreator';
import { put, select } from 'redux-saga/effects';
import RootState from 'src/states';
import getBeginAndEndDateFromMonth from 'src/utilsLogic/Date/GetBeginAndEndDateFromMonth';
import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';

export function* changeMonthSaga(action: ReturnType<typeof changeMonthButtonClicked>) {
  yield put(action.payload()); // 表示させる週を更新するためのアクション発火
  const state: RootState = yield select(); // アクション発火後のStateを取得
  const displayDate = new Date(state.displayDateState.displayDate);
  const beginAndEndDate = getBeginAndEndDateFromMonth(displayDate);
  yield put(getListMoodOfEmployee.request(beginAndEndDate));
}