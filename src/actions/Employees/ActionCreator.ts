import { createAsyncAction } from 'typesafe-actions';
import { getEmployeesParams } from 'src/apis/Employees/GetEmployeesClient';
import EmployeesActionType from './ActionType';
import EmployeesState from 'src/states/Employees/Employees';

export const getEmployees = createAsyncAction(
  EmployeesActionType.GET_EMPLOYEES_REQUEST,
  EmployeesActionType.GET_EMPLOYEES_SUCCEEDED,
  EmployeesActionType.GET_EMPLOYEES_FAILED
)<getEmployeesParams, EmployeesState, Error>();
