import { createAsyncAction } from 'typesafe-actions';
import ListMoodOfEmployeeActionType from './ActionType';
import {
  getListMoodOfEmployeeParams,
  getListMoodOfEmployeeResponse,
} from 'src/apis/ListMoodOfEmployee/GetListMoodOfEmployee';

export const getListMoodOfEmployee = createAsyncAction(
  ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_REQUEST,
  ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_SECCEEDED,
  ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_FAILED
)<getListMoodOfEmployeeParams, getListMoodOfEmployeeResponse, Error>();
