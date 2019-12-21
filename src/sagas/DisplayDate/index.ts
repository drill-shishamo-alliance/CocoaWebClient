import { takeLatest } from 'redux-saga/effects';
import displayDateActionType from 'src/actions/DisplayDate/DisplayDateActionType';
import { changeWeekSpanSaga } from './ChangeWeekSpanSaga';
import { changeMonthSaga } from './ChangeMonthSaga';
import { tabClickedSaga } from './TabClickedSaga';

export const displayDateSaga = [
  takeLatest(displayDateActionType.CHANGE_WEEK_SPAN_BUTTON_CLICKED, changeWeekSpanSaga),
  takeLatest(displayDateActionType.CHANGE_MONTH_BUTTON_CLICKED, changeMonthSaga),
  takeLatest(displayDateActionType.TAB_CLICKED, tabClickedSaga),
];
