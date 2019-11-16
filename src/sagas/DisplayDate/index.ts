import { takeLatest } from 'redux-saga/effects';
import displayDateActionType from 'src/actions/DisplayDate/DisplayDateActionType';
import { calculateWeekSpanSaga, calculateMonthSpanSaga } from './CalculateDisplaySpan';

export const displayDateSaga = [
  takeLatest(displayDateActionType.CHANGE_WEEK_SPAN_BUTTON_CLICKED, calculateWeekSpanSaga),
  takeLatest(displayDateActionType.CHANGE_MONTH_BUTTON_CLICKED, calculateMonthSpanSaga),
];
