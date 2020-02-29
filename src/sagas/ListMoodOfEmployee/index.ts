import { takeLatest } from 'redux-saga/effects';
import ListMoodOfEmployeeActionType from 'src/actions/ListMoodOfEmployee/ActionType';
import { getListMoodOfEmployeeSaga } from './GetListMoodOfEmployeeSaga';

export const listMoodOfEmployeeSaga = [
  takeLatest(
    ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_REQUEST,
    getListMoodOfEmployeeSaga
  ),
];
