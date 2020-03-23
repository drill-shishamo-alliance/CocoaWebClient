import { createAsyncAction, createAction, createStandardAction } from 'typesafe-actions';
import ListMoodOfEmployeeActionType from './ActionType';
import { getListMoodOfEmployeeParams } from 'src/apis/ListMoodOfEmployee/GetListMoodOfEmployeeOnAjax';
import listMoodOfEmployeeState from 'src/states/ListMoodOfEmployee/ListMoodOfEmployee';

export const getListMoodOfEmployee = createAsyncAction(
  ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_REQUEST,
  ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_SUCCEEDED,
  ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_FAILED
)<getListMoodOfEmployeeParams, listMoodOfEmployeeState, Error>();

export const resetListMoodOfEmployee = createStandardAction(
  ListMoodOfEmployeeActionType.RESET_MOOD_OF_EMPLOYEE
)<void>();
