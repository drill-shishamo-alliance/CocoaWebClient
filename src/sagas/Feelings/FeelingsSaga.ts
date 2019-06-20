import { call, put, takeLatest } from 'redux-saga/effects';
import FeelingsApi from 'src/apis/FeelingsApi/FeelingsApi';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import { getFeelings } from 'src/actions/Feelings/FeelingsActionCreator';
import FeelingsActionType from 'src/actions/Feelings/FeelingsActionType';

const api = new FeelingsApi();

export function* getFeelingsSaga(action: ReturnType<typeof getFeelings.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getFeelings>> = yield call(
    api.getFeelings,
    action.payload.access_token
  );
  yield console.log(JSON.stringify(response));
  if (response.status === 200 && response.data) {
    yield put(getFeelings.success(response.data));
  } else {
    yield put(getFeelings.failure(new Error('unknown error')));
  }
}

// export function* getFeelingsDummySaga(action: ReturnType<typeof getFeelings.request>) {
//   const response: PromiseGenericType<ReturnType<typeof api.getFeelingsMock>> = yield call(
//     api.getFeelingsMock
//   );

//   yield put(getFeelings.success(response));
// }

const FeelingsSaga = [takeLatest(FeelingsActionType.GET_FEELINGS_REQUEST, getFeelingsSaga)];

export default FeelingsSaga;
