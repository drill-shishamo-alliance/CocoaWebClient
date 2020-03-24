import { call, put, select } from 'redux-saga/effects';
import { postLogin } from 'src/actions/User/ActionCreator';
import { postLoginApi } from 'src/apis/User/PostLoginApi';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import RootState from 'src/states';
import convertDateToUnix from 'src/utilsLogic/Date/ConvertDateToUnix';
import {
  getListMoodOfEmployee,
  resetListMoodOfEmployee,
} from 'src/actions/ListMoodOfEmployee/ActionCreator';
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
      yield put(getEmployees.request({ departmentId: response.data.department_id }));
      const state: RootState = yield select();
      const displaySpan = state.displayDateState.displaySpan;
      const begin_date = convertDateToUnix(displaySpan[0]);
      const end_date = convertDateToUnix(displaySpan[displaySpan.length - 1]);
      const employees = state.Employees;
      const departmentId = state.UserState.departmentId;
      yield put(getMoods.request({ departmentId }));
      yield put(getCauses.request({ departmentId }));
      yield put(resetListMoodOfEmployee());
      Object.values(employees).forEach(function*(employee) {
        yield put(
          getListMoodOfEmployee.request({ employee_id: employee.id, begin_date, end_date })
        );
      });
    } else if (response.status === 400) {
      yield put(postLogin.failure());
    } else {
      yield put(postLogin.failure());
    }
  } catch (e) {
    yield put(postLogin.failure());
  }
}
