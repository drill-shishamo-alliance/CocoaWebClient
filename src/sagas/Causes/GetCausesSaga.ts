import { getCauses } from 'src/actions/Causes/ActionCreator';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { getCausesOnAjax } from 'src/apis/Causes/GetCausesOnAjax';
import { call, put } from 'redux-saga/effects';
import CausesState from 'src/states/Causes/Causes';

export function* getCausesSaga(action: ReturnType<typeof getCauses.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof getCausesOnAjax>> = yield call(
      getCausesOnAjax,
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
  } catch (e) {
    yield put(getCauses.failure(new Error(e)));
  }
}
