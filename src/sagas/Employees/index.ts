import { takeLatest } from 'redux-saga/effects';
import EmployeesActionType from 'src/actions/Employees/ActionType';
import { getEmployeesSaga } from './GetEmployeesSaga';

export const employeesSaga = [
  takeLatest(EmployeesActionType.GET_EMPLOYEES_REQUEST, getEmployeesSaga),
];
