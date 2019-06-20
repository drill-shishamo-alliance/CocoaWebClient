import { call, put, takeLatest } from 'redux-saga/effects';
import JuniorFeelingsApi from 'src/apis/JuniorFeelingsApi/JuniorFeelingsApi';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import { getJuniorFeelings } from 'src/actions/JuniorFeelings/JuniorFeelingsActionCreator';
import JuniorFeelingsActionType from 'src/actions/JuniorFeelings/JuniorFeelingsActionType';

const api = new JuniorFeelingsApi();

export function* getJuniorFeelingsSaga(action: ReturnType<typeof getJuniorFeelings.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getJuniorFeelings>> = yield call(
    api.getJuniorFeelings,
    action.payload.id,
    action.payload.access_token
  );
  yield console.log(JSON.stringify(response));
  if (response.status === 200 && response.data) {
    yield put(getJuniorFeelings.success(response.data));
  } else {
    yield put(getJuniorFeelings.failure(new Error('unknown error')));
  }
}

// export function* getJuniorFeelingsDummySaga(action: ReturnType<typeof getJuniorFeelings.request>) {
//   const response: PromiseGenericType<ReturnType<typeof api.getJuniorFeelingsMock>> = yield call(
//     api.getJuniorFeelingsMock
//   );

//   yield put(getJuniorFeelings.success(response));
// }

const juniorFeelingsSaga = [
  takeLatest(JuniorFeelingsActionType.GET_JUNIOR_FEELINGS_REQUEST, getJuniorFeelingsSaga),
];

export default juniorFeelingsSaga;
