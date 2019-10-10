import { all } from 'redux-saga/effects';
import employeeMoodsSaga from './EmployeeMoods/EmployeeMoodsSaga';
import MoodsSaga from './Moods/MoodsSaga';
import getEmployeeMonthMoodsSaga from './EmployeeMoodsDetails/EmployeeMonthMoodsSaga';

export default function* rootSaga() {
  yield all([...employeeMoodsSaga, ...MoodsSaga, ...getEmployeeMonthMoodsSaga]);
}
