import { createAsyncAction } from 'typesafe-actions';
import ListMoodOfEmployeeActionType from './ActionType';
import listMoodOfEmployeeState from 'src/states/ListMoodOfEmployee/ListMoodOfEmployee';

export const getListMoodOfEmployee = createAsyncAction(
  ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_REQUEST,
  ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_SUCCEEDED,
  ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_FAILED
)<{ beginDate: number; endDate: number }, listMoodOfEmployeeState, Error>();
