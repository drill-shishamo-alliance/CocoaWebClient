import { call, put, takeLatest } from 'redux-saga/effects';
import api from 'src/apis/EmployeeMoodsApi/EmployeeMoodsApi';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import { getEmployeeMoods } from 'src/actions/EmployeeMoods/EmployeeMoodsActionCreator';
import EmployeeMoodsActionType from 'src/actions/EmployeeMoods/EmployeeMoodsActionType';

export function* getEmployeeMoodsSaga(action: ReturnType<typeof getEmployeeMoods.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getEmployeeMoods>> = yield call(
    api.getEmployeeMoods,
    action.payload.id,
    action.payload.access_token
  );
  yield console.log(JSON.stringify(response));
  if (response.status === 200 && response.data) {
    yield put(getEmployeeMoods.success(response.data));
  } else {
    yield put(getEmployeeMoods.failure(new Error('unknown error')));
  }
}

const employeeMoodsSaga = [
  takeLatest(EmployeeMoodsActionType.GET_EMPLOYEE_MOODS_REQUEST, getEmployeeMoodsSaga),
];

export default employeeMoodsSaga;
