import { call, put, takeLatest } from 'redux-saga/effects';
import api from 'src/apis/JuniorFeelingsApi/JuniorFeelingsApi';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import { getJuniorMonthFeelings } from 'src/actions/JuniorFeelings/JuniorFeelingsDetails/JuniorFeelingsDetailsActionCreator';
import JuniorFeelingsDetailsActionType from 'src/actions/JuniorFeelings/JuniorFeelingsDetails/JuniorFeelingsDetailsActionType';

export function* getJuniorMonthFeelingsSaga(
  action: ReturnType<typeof getJuniorMonthFeelings.request>
) {
  const response: PromiseGenericType<ReturnType<typeof api.getJuniorMonthFeelings>> = yield call(
    api.getJuniorMonthFeelings
  );

  if (response.status === 200 && response.data) {
    yield put(getJuniorMonthFeelings.success(response.data));
  } else if (response.status === 400) {
    yield put(getJuniorMonthFeelings.failure());
  } else {
    yield put(getJuniorMonthFeelings.failure());
  }
}

const juniorMonthFeelingsSaga = [
  takeLatest(
    JuniorFeelingsDetailsActionType.GET_JUNIOR_MONTH_FEELINGS_REQUEST,
    getJuniorMonthFeelingsSaga
  ),
];
export default juniorMonthFeelingsSaga;
