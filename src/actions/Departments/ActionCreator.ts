import { createAsyncAction } from 'typesafe-actions';
import {
  getDepartmentsParams,
  getDepartmentsResponse,
} from 'src/apis/Departments/GetDepartmentsOnAjax';
import DepartmentsActionType from './ActionType';

export const getDepartments = createAsyncAction(
  DepartmentsActionType.GET_DEPARTMENTS_REQUEST,
  DepartmentsActionType.GET_DEPARTMENTS_SUCCEEDED,
  DepartmentsActionType.GET_DEPARTMENTS_FAILED
)<getDepartmentsParams, getDepartmentsResponse, Error>();
