import { call, put } from 'redux-saga/effects';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { getMoods } from 'src/actions/Moods/ActionCreator';
import { getMoodsOnAjax } from 'src/apis/Moods/GetMoodsOnAjax';

export function* getMoodsSaga(action: ReturnType<typeof getMoods.request>) {
  const response: PromiseGenericType<ReturnType<typeof getMoodsOnAjax>> = yield call(
    getMoodsOnAjax,
    action.payload
  );

  if (response.status === 200 && response.data) {
    yield put(getMoods.success(response.data));
  } else {
    yield put(getMoods.failure(new Error('getMoods error')));
  }
}
