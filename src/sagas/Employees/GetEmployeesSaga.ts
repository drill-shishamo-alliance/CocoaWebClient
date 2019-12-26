import { getEmployees } from 'src/actions/Employees/ActionCreator';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { getEmployeesOnAjax } from 'src/apis/Employees/GetEmployeesOnAjax';
import { call, put } from 'redux-saga/effects';

export function* getEmployeesSaga(action: ReturnType<typeof getEmployees.request>) {
  const response: PromiseGenericType<ReturnType<typeof getEmployeesOnAjax>> = yield call(
    getEmployeesOnAjax,
    action.payload
  );

  if (response.status === 200 && response.data) {
    yield put(getEmployees.success(response.data));
  } else {
    yield put(getEmployees.failure(new Error('getEmployees error')));
  }
}
