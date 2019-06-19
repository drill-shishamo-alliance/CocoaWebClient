import { createAsyncAction } from 'typesafe-actions';
import FeelingsActionType from './FeelingsActionType';
import FeelingsState from 'src/apis/FeelingsApi/FeelingsResponse';

export const getFeelings = createAsyncAction(
  FeelingsActionType.GET_FEELINGS_REQUEST,
  FeelingsActionType.GET_FEELINGS_SUCCEEDED,
  FeelingsActionType.GET_FEELINGS_FAILED
)<{ access_token?: string }, FeelingsState[], Error>();
