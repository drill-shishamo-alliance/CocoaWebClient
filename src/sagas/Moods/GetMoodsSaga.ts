import { call, put } from 'redux-saga/effects';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { getMoods } from 'src/actions/Moods/ActionCreator';
import { getMoodsClient } from 'src/apis/Moods/GetMoodsClient';
import MoodsState from 'src/states/Moods/Moods';

export function* getMoodsSaga(action: ReturnType<typeof getMoods.request>) {
  const response: PromiseGenericType<ReturnType<typeof getMoodsClient>> = yield call(
    getMoodsClient,
    action.payload
  );

  if (response.status === 200 && response.data) {
    const moodsState: MoodsState = {};
    response.data.forEach(mood => {
      moodsState[mood.id] = {
        id: mood.id,
        name: mood.name,
        icon_name: mood.icon_name,
        weight: mood.weight,
        color: mood.color,
      };
    });
    yield put(getMoods.success(moodsState));
  } else {
    yield put(getMoods.failure(new Error('getMoods error')));
  }
}
