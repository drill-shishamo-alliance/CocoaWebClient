import {
  changeWeekSpanButtonClicked,
  updateDisplaySpan,
} from 'src/actions/DisplayDate/DisplayDateActionCreator';
import { put, select } from 'redux-saga/effects';
import RootState from 'src/states';
import getWeekOfMonth from 'src/utilsLogic/Date/GetWeekOfMonth';
import {
  getListMoodOfEmployee,
  resetListMoodOfEmployee,
} from 'src/actions/ListMoodOfEmployee/ActionCreator';
import { getListMoodOfDepartment } from 'src/actions/ListMoodOfDepartment/ActionCreator';
import {
  convertDateToUnixForBegin,
  convertDateToUnixForEnd,
  convertDateToUnix,
} from 'src/utilsLogic/Date/ConvertDateToUnix';

export function* changeWeekSpanSaga(action: ReturnType<typeof changeWeekSpanButtonClicked>) {
  yield put(action.payload()); // 表示するさせる週を更新するためのアクション発火
  const state: RootState = yield select(); // アクション発火後のStateを取得
  const displayMonday = new Date(state.displayDateState.displayMonday);
  const weekIndex = state.displayDateState.weekIndex;

  const newDisplaySpan = getWeekOfMonth(displayMonday, weekIndex);
  const begin_date = convertDateToUnixForBegin(newDisplaySpan[0]);
  const end_date = convertDateToUnixForEnd(newDisplaySpan[newDisplaySpan.length - 1]);
  const mock_begin_date = convertDateToUnix(newDisplaySpan[0]);
  const mock_end_date = convertDateToUnix(newDisplaySpan[newDisplaySpan.length - 1]);

  const employees = state.Employees;

  yield put(updateDisplaySpan({ displaySpan: newDisplaySpan }));
  yield put(resetListMoodOfEmployee());
  Object.values(employees).forEach(function*(employee) {
    yield put(getListMoodOfEmployee.request({ employee_id: employee.id, begin_date, end_date }));
  });
  yield put(
    getListMoodOfDepartment.request({
      department_id: 1,
      begin_date: mock_begin_date,
      end_date: mock_end_date,
    })
  );
}
