import { createAsyncAction } from 'typesafe-actions';
import ListMoodOfEmployeeActionType from './ActionType';
import { getListMoodOfEmployeeResponse } from 'src/apis/ListMoodOfEmployee/GetListMoodOfEmployee';

export const getListMoodOfEmployee = createAsyncAction(
  ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_REQUEST,
  ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_SUCCEEDED,
  ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_FAILED
)<{ beginDate: Date; endDate: Date }, getListMoodOfEmployeeResponse, Error>();
