import { getEmployees } from 'src/actions/Employees/ActionCreator';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { getEmployeesOnAjax } from 'src/apis/Employees/GetEmployeesOnAjax';
import { call, put } from 'redux-saga/effects';
import EmployeesState from 'src/states/Employees/Employees';

export function* getEmployeesSaga(action: ReturnType<typeof getEmployees.request>) {
  const response: PromiseGenericType<ReturnType<typeof getEmployeesOnAjax>> = yield call(
    getEmployeesOnAjax,
    action.payload
  );

  if (response.status === 200 && response.data) {
    const employeesState: EmployeesState = {};
    response.data.forEach(employee => {
      employeesState[employee.id] = {
        id: employee.id,
        name: employee.name,
      };
    });
    yield put(getEmployees.success(employeesState));
  } else {
    yield put(getEmployees.failure(new Error('getEmployees error')));
  }
}
