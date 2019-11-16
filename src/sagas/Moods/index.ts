import { takeLatest } from 'redux-saga/effects';
import { getMoodsSaga } from './GetMoodsSaga';
import MoodsActionType from 'src/actions/Moods/ActionType';

export const moodsSaga = [takeLatest(MoodsActionType.GET_MOODS_REQUEST, getMoodsSaga)];
