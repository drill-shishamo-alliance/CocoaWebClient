import { takeLatest } from 'redux-saga/effects';
import DepartmentsActionType from 'src/actions/Departments/ActionType';
import { getDepartmentsSaga } from './GetDepartmentsSaga';

export const departmentsSaga = [
  takeLatest(DepartmentsActionType.GET_DEPARTMENTS_REQUEST, getDepartmentsSaga),
];
