import { takeLatest } from 'redux-saga/effects';
import CausesActionType from 'src/actions/Causes/ActionType';
import { getCausesSaga } from './GetCausesSaga';

export const causesSasa = [takeLatest(CausesActionType.GET_CAUSES_REQUEST, getCausesSaga)];
