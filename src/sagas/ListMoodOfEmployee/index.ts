import { takeEvery } from 'redux-saga/effects';
import ListMoodOfEmployeeActionType from 'src/actions/ListMoodOfEmployee/ActionType';
import { getListMoodOfEmployeeSaga } from './GetListMoodOfEmployeeSaga';

export const listMoodOfEmployeeSaga = [
  takeEvery(
    ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_REQUEST,
    getListMoodOfEmployeeSaga
  ),
];
