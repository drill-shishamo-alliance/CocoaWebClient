import { createAsyncAction } from 'typesafe-actions';
import JuniorFeelingsActionType from './JuniorFeelingsActionType';
import { JuniorFeeling } from 'src/states/JuniorFeelingsState';

export const getJuniorFeelings = createAsyncAction(
  JuniorFeelingsActionType.GET_JUNIOR_FEELINGS_REQUEST,
  JuniorFeelingsActionType.GET_JUNIOR_FEELINGS_SUCCEEDED,
  JuniorFeelingsActionType.GET_JUNIOR_FEELINGS_FAILED
)<{ id: number; access_token: string }, JuniorFeeling[], Error>();
