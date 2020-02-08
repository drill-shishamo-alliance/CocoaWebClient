import { createAsyncAction } from 'typesafe-actions';
import ListMoodOfDepartmentActionType from './ActionType';
import {
  GetListMoodOfDepartmentParams,
  GetListMoodOfDepartmentResponse,
} from 'src/apis/ListMoodOfDepartment/GetListMoodOfDepartment';

export const getListMoodOfDepartment = createAsyncAction(
  ListMoodOfDepartmentActionType.GET_LIST_MOOD_OF_DEPARTMENT_REQUEST,
  ListMoodOfDepartmentActionType.GET_LIST_MOOD_OF_DEPARTMENT_SUCCEEDED,
  ListMoodOfDepartmentActionType.GET_LIST_MOOD_OF_DEPARTMENT_FAILED
)<GetListMoodOfDepartmentParams, GetListMoodOfDepartmentResponse, Error>();
