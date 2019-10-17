import { all } from 'redux-saga/effects';
import employeeMoodsSaga from './EmployeeMoods/EmployeeMoodsSaga';
import MoodsSaga from './Moods/MoodsSaga';
import getEmployeeMonthMoodsSaga from './EmployeeMoodsDetails/EmployeeMonthMoodsSaga';
import weeklyMoodsByMonthSaga from './WeeklyMoodsByMonth/WeeklyMoodsByMonthSaga';

export default function* rootSaga() {
  yield all([
    ...employeeMoodsSaga,
    ...MoodsSaga,
    ...getEmployeeMonthMoodsSaga,
    ...weeklyMoodsByMonthSaga,
  ]);
}
