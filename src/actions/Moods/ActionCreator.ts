import { createAsyncAction } from 'typesafe-actions';

import { getMoodsParams } from 'src/apis/Moods/GetMoodsClient';
import MoodsActionType from './ActionType';
import MoodsState from 'src/states/Moods/Moods';

export const getMoods = createAsyncAction(
  MoodsActionType.GET_MOODS_REQUEST,
  MoodsActionType.GET_MOODS_SUCCEEDED,
  MoodsActionType.GET_MOODS_FAILED
)<getMoodsParams, MoodsState, Error>();
