import { takeLatest } from 'redux-saga/effects';
import ListMoodOfEmployeeActionType from 'src/actions/ListMoodOfEmployee/ActionType';
import { getListMoodOfEmployeeSaga, calculateSpanSaga } from './GetListMoodOfEmployeeSaga';
import displayDateActionType from 'src/actions/DisplayDate/DisplayDateActionType';

export const listMoodOfEmployeeSaga = [
  takeLatest(displayDateActionType.CHANGE_DATE_SPAN_BUTTON_CLICKED, calculateSpanSaga),
  takeLatest(
    ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_REQUEST,
    getListMoodOfEmployeeSaga
  ),
];
