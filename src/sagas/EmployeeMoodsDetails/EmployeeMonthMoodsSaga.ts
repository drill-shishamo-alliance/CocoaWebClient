import { call, put, takeLatest } from 'redux-saga/effects';
import api from 'src/apis/EmployeeMoodsApi/EmployeeMoodsApi';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import { getEmployeeMonthMoods } from 'src/actions/EmployeeMoods/EmployeeMoodsDetails/EmployeeMoodsDetailsActionCreator';
import EmployeeMoodsDetailsActionType from 'src/actions/EmployeeMoods/EmployeeMoodsDetails/EmployeeMoodsDetailsActionType';

export function* getEmployeeMonthMoodsSaga(
  action: ReturnType<typeof getEmployeeMonthMoods.request>
) {
  const response: PromiseGenericType<ReturnType<typeof api.getEmployeeMonthMoods>> = yield call(
    api.getEmployeeMonthMoods
  );

  if (response.status === 200 && response.data) {
    yield put(getEmployeeMonthMoods.success(response.data));
  } else if (response.status === 400) {
    yield put(getEmployeeMonthMoods.failure());
  } else {
    yield put(getEmployeeMonthMoods.failure());
  }
}

const employeeMonthMoodsSaga = [
  takeLatest(
    EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_REQUEST,
    getEmployeeMonthMoodsSaga
  ),
];
export default employeeMonthMoodsSaga;
