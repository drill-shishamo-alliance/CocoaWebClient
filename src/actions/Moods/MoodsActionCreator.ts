import { createAsyncAction } from 'typesafe-actions';
import MoodsActionType from './MoodsActionType';
import MoodsState from 'src/apis/EmployeeMoodsApi/MoodsResponse/Moods';

export const getMoods = createAsyncAction(
  MoodsActionType.GET_MOODS_REQUEST,
  MoodsActionType.GET_MOODS_SUCCEEDED,
  MoodsActionType.GET_MOODS_FAILED
)<{ access_token?: string }, MoodsState[], Error>();
