import { takeLatest } from 'redux-saga/effects';
import ListMoodOfEmployeeActionType from 'src/actions/ListMoodOfEmployee/ActionType';
import {
  getListMoodOfEmployeeSaga,
  calculateMonthSpanSaga,
  calculateWeekSpanSaga,
} from './GetListMoodOfEmployeeSaga';
import displayDateActionType from 'src/actions/DisplayDate/DisplayDateActionType';

export const listMoodOfEmployeeSaga = [
  takeLatest(displayDateActionType.CHANGE_WEEK_SPAN_BUTTON_CLICKED, calculateWeekSpanSaga),
  takeLatest(displayDateActionType.CHANGE_MONTH_BUTTON_CLICKED, calculateMonthSpanSaga),
  takeLatest(
    ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_REQUEST,
    getListMoodOfEmployeeSaga
  ),
];
