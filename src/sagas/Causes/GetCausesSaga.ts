import { getCauses } from 'src/actions/Causes/ActionCreator';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { getCausesOnHTTP } from 'src/apis/Causes/GetCausesClient';
import { call, put } from 'redux-saga/effects';
import CausesState from 'src/states/Causes/Causes';

export function* getCausesSaga(action: ReturnType<typeof getCauses.request>) {
  const response: PromiseGenericType<ReturnType<typeof getCausesOnHTTP>> = yield call(
    getCausesOnHTTP,
    action.payload
  );

  if (response.status === 200 && response.data) {
    const causesState: CausesState = {};
    response.data.forEach(cause => {
      causesState[cause.id] = {
        id: cause.id,
        name: cause.name,
      };
    });
    yield put(getCauses.success(causesState));
  } else {
    yield put(getCauses.failure(new Error('getCauses error')));
  }
}
