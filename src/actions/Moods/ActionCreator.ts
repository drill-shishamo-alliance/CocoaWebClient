import { createAsyncAction } from 'typesafe-actions';

import { getMoodsParams, getMoodsResponse } from 'src/apis/Moods/GetMoodsOnAjax';
import MoodsActionType from './ActionType';

export const getMoods = createAsyncAction(
  MoodsActionType.GET_MOODS_REQUEST,
  MoodsActionType.GET_MOODS_SUCCEEDED,
  MoodsActionType.GET_MOODS_FAILED
)<getMoodsParams, getMoodsResponse, Error>();
