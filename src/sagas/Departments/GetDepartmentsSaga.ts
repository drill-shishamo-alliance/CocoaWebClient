import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { call, put } from 'redux-saga/effects';
import { getDepartments } from 'src/actions/Departments/ActionCreator';
import { getDepartmentsOnAjax } from 'src/apis/Departments/GetDepartmentsOnAjax';

export function* getDepartmentsSaga(action: ReturnType<typeof getDepartments.request>) {
  console.log('hoge');
  const response: PromiseGenericType<ReturnType<typeof getDepartmentsOnAjax>> = yield call(
    getDepartmentsOnAjax,
    action.payload
  );
  console.log('fuga');
  if (response.status === 200 && response.data) {
    yield put(getDepartments.success(response.data));
  } else {
    yield put(getDepartments.failure(new Error('getDepartments error')));
  }
}
