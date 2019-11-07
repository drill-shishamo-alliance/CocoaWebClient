import { takeLatest } from 'redux-saga/effects';
import ListMoodOfEmployeeActionType from 'src/actions/ListMoodOfEmployee/ActionType';
import { getListMoodOfEmployeeSaga, calculateSpanSaga } from './GetListMoodOfEmployeeSaga';
import CurrentDisplayedDateActionType from 'src/actions/CurrentDisplayedDate/CurrentDisplayedDateActionType';

export const listMoodOfEmployeeSaga = [
  takeLatest(CurrentDisplayedDateActionType.CHANGE_DATE_SPAN_BUTTON_CLICKED, calculateSpanSaga),
  takeLatest(
    ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_REQUEST,
    getListMoodOfEmployeeSaga
  ),
];
