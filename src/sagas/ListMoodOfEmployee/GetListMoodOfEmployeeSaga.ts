import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { call, put, select } from 'redux-saga/effects';
import { getListMoodOfEmployeeClient } from 'src/apis/ListMoodOfEmployee/GetListMoodOfEmployee';
import {
  changeWeekSpanButtonClicked,
  updateDisplaySpan,
  changeMonthButtonClicked,
} from 'src/actions/DisplayDate/DisplayDateActionCreator';
import RootState from 'src/states';
import getWeekOfMonth from 'src/utilsLogic/Date/GetWeekOfMonth';
import getBeginAndEndDateFromMonth from 'src/utilsLogic/Date/GetBeginAndEndDateFromMonth';

export function* calculateWeekSpanSaga(action: ReturnType<typeof changeWeekSpanButtonClicked>) {
  yield put(action.payload()); // 表示するさせる週を更新するためのアクション発火
  const state: RootState = yield select(); // アクション発火後のStateを取得
  const displayDate = new Date(state.displayDateState.displayDate);
  const weekIndex = state.displayDateState.weekIndex;

  const newDisplaySpan = getWeekOfMonth(displayDate, weekIndex);
  const beginDate: Date = new Date(newDisplaySpan[0]);
  const endDate: Date = new Date(newDisplaySpan[newDisplaySpan.length - 1]);

  yield put(updateDisplaySpan({ displaySpan: newDisplaySpan }));
  yield put(getListMoodOfEmployee.request({ beginDate, endDate }));
}

export function* calculateMonthSpanSaga(action: ReturnType<typeof changeMonthButtonClicked>) {
  yield put(action.payload()); // 表示させる週を更新するためのアクション発火
  const state: RootState = yield select(); // アクション発火後のStateを取得
  const displayDate = new Date(state.displayDateState.displayDate);
  const beginAndEndDate = getBeginAndEndDateFromMonth(displayDate);
  yield put(getListMoodOfEmployee.request(beginAndEndDate));
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
