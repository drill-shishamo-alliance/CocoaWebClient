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
    const juniorFeelings: ReturnType<
      typeof api.mapGetJuniorFeelingsResponseToJuniorFeelings
    > = yield api.mapGetJuniorFeelingsResponseToJuniorFeelings(response.data);
    yield put(getJuniorFeelings.success(juniorFeelings));
  } else if (response.status === 400) {
    yield put(getJuniorFeelings.failure(new Error(response.data.error_message)));
  } else {
    yield put(getJuniorFeelings.failure(new Error('unknown error')));
  }
}

const juniorFeelingsSaga = [
  takeLatest(JuniorFeelingsActionType.GET_JUNIOR_FEELINGS_REQUEST, getJuniorFeelingsSaga),
];

export default juniorFeelingsSaga;
