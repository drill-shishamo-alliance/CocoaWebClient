import { createAsyncAction } from 'typesafe-actions';
import { getEmployeesParams, getEmployeesResponse } from 'src/apis/Employees/GetEmployeesClient';
import EmployeesActionType from './ActionType';

export const getEmployees = createAsyncAction(
  EmployeesActionType.GET_EMPLOYEES_REQUEST,
  EmployeesActionType.GET_EMPLOYEES_SUCCEEDED,
  EmployeesActionType.GET_EMPLOYEES_FAILED
)<getEmployeesParams, getEmployeesResponse, Error>();
