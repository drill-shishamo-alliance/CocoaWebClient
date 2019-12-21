import { createAsyncAction } from 'typesafe-actions';
import CausesActionType from './ActionType';
import { getCausesParams, getCausesResponse } from 'src/apis/Causes/GetCausesClient';

export const getCauses = createAsyncAction(
  CausesActionType.GET_CAUSES_REQUEST,
  CausesActionType.GET_CAUSES_SUCCEEDED,
  CausesActionType.GET_CAUSES_FAILED
)<getCausesParams, getCausesResponse, Error>();
