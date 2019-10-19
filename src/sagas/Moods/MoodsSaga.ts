import { call, put, takeLatest } from 'redux-saga/effects';
import api from 'src/apis/EmployeeMoodsApi/EmployeeMoodsApi';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import { getMoods } from 'src/actions/Moods/MoodsActionCreator';
import MoodsActionType from 'src/actions/Moods/MoodsActionType';

export function* getMoodsSaga(action: ReturnType<typeof getMoods.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getMoods>> = yield call(
    api.getMoods,
    action.payload.access_token
  );
  yield console.log(JSON.stringify(response));
  if (response.status === 200 && response.data) {
    yield put(getMoods.success(response.data.moods));
  } else {
    yield put(getMoods.failure(new Error('unknown error')));
  }
}

const MoodsSaga = [takeLatest(MoodsActionType.GET_MOODS_REQUEST, getMoodsSaga)];

export default MoodsSaga;
