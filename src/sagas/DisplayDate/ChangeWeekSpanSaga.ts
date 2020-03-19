import {
  changeWeekSpanButtonClicked,
  updateDisplaySpan,
} from 'src/actions/DisplayDate/DisplayDateActionCreator';
import { put, select } from 'redux-saga/effects';
import RootState from 'src/states';
import getWeekOfMonth from 'src/utilsLogic/Date/GetWeekOfMonth';
import convertDateToUnix from 'src/utilsLogic/Date/ConvertDateToUnix';
import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';
import { getListMoodOfDepartment } from 'src/actions/ListMoodOfDepartment/ActionCreator';

export function* changeWeekSpanSaga(action: ReturnType<typeof changeWeekSpanButtonClicked>) {
  yield put(action.payload()); // 表示するさせる週を更新するためのアクション発火
  const state: RootState = yield select(); // アクション発火後のStateを取得
  const displayMonday = new Date(state.displayDateState.displayMonday);
  const weekIndex = state.displayDateState.weekIndex;

  const newDisplaySpan = getWeekOfMonth(displayMonday, weekIndex);
  const begin_date = convertDateToUnix(newDisplaySpan[0]);
  const end_date = convertDateToUnix(newDisplaySpan[newDisplaySpan.length - 1]);
  const employee_id = state.UserState.employeeId;
  const department_id = state.UserState.departmentId;

  yield put(updateDisplaySpan({ displaySpan: newDisplaySpan }));
  yield put(getListMoodOfEmployee.request({ employee_id, department_id, begin_date, end_date }));
  yield put(getListMoodOfDepartment.request({ department_id: 'hoge', begin_date, end_date }));
}
