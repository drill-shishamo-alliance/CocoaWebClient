import { call, put } from 'redux-saga/effects';
import { postLogin } from 'src/actions/User/ActionCreator';
import { postLoginApi } from 'src/apis/User/PostLoginApi';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { getEmployees } from 'src/actions/Employees/ActionCreator';
import { getMoods } from 'src/actions/Moods/ActionCreator';
import { getCauses } from 'src/actions/Causes/ActionCreator';

export function* postLoginSaga(action: ReturnType<typeof postLogin.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof postLoginApi>> = yield call(
      postLoginApi,
      action.payload
    );

    if (response.status === 201 && response.data) {
      yield put(postLogin.success(response.data));
      const departmentId = response.data.department_id;
      yield put(getEmployees.request({ departmentId }));
      yield put(getMoods.request({ departmentId }));
      yield put(getCauses.request({ departmentId }));
    } else if (response.status === 400) {
      yield put(postLogin.failure());
    } else {
      yield put(postLogin.failure());
    }
  } catch (e) {
    yield put(postLogin.failure());
  }
}
