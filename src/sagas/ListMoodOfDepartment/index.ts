import { takeLatest } from 'redux-saga/effects';
import ListMoodOfDepartmentActionType from 'src/actions/ListMoodOfDepartment/ActionType';
import { getListMoodOfDepartmentSaga } from './GetListMoodOfDepartmentSaga';

export const listMoodOfDepartmentSaga = [
  takeLatest(
    ListMoodOfDepartmentActionType.GET_LIST_MOOD_OF_DEPARTMENT_REQUEST,
    getListMoodOfDepartmentSaga
  ),
];
