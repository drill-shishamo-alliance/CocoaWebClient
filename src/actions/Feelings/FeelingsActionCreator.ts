import { createAsyncAction } from 'typesafe-actions';
import FeelingsActionType from './FeelingsActionType';
import FeelingsState from 'src/apis/JuniorFeelingsApi/FeelingsResponse/Feelings';

export const getFeelings = createAsyncAction(
  FeelingsActionType.GET_FEELINGS_REQUEST,
  FeelingsActionType.GET_FEELINGS_SUCCEEDED,
  FeelingsActionType.GET_FEELINGS_FAILED
)<{ access_token?: string }, FeelingsState[], Error>();
