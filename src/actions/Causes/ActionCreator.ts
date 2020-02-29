import { createAsyncAction } from 'typesafe-actions';
import CausesActionType from './ActionType';
import { getCausesParams } from 'src/apis/Causes/GetCausesOnAjax';
import CausesState from 'src/states/Causes/Causes';

export const getCauses = createAsyncAction(
  CausesActionType.GET_CAUSES_REQUEST,
  CausesActionType.GET_CAUSES_SUCCEEDED,
  CausesActionType.GET_CAUSES_FAILED
)<getCausesParams, CausesState, Error>();
