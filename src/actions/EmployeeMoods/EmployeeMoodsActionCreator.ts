import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import EmployeeMoodsActionType from './EmployeeMoodsActionType';
import EmployeeMoodsState from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';
import EmployeeMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';

export const getEmployeeMoods = createAsyncAction(
  EmployeeMoodsActionType.GET_EMPLOYEE_MOODS_REQUEST,
  EmployeeMoodsActionType.GET_EMPLOYEE_MOODS_SUCCEEDED,
  EmployeeMoodsActionType.GET_EMPLOYEE_MOODS_FAILED
)<{ id?: number; access_token?: string }, EmployeeMoodsState[], Error>();

export const selectEmployee = createStandardAction(EmployeeMoodsActionType.SELECT_EMPLOYEE)<
  EmployeeMoods
>();
