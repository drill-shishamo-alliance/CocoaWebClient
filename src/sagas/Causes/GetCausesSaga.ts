import { getCauses } from 'src/actions/Causes/ActionCreator';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { getCausesOnHTTP } from 'src/apis/Causes/GetCausesClient';
import { call, put } from 'redux-saga/effects';

export function* getCausesSaga(action: ReturnType<typeof getCauses.request>) {
  const response: PromiseGenericType<ReturnType<typeof getCausesOnHTTP>> = yield call(
    getCausesOnHTTP,
    action.payload
  );

  if (response.status === 200 && response.data) {
    yield put(getCauses.success(response.data));
  } else {
    yield put(getCauses.failure(new Error('getCauses error')));
  }
}
