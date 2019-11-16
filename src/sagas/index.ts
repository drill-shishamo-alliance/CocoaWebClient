import { all } from 'redux-saga/effects';
import { moodsSaga } from './Moods';
import { employeesSaga } from './Employees';
import { listMoodOfEmployeeSaga } from './ListMoodOfEmployee';
import { displayDateSaga } from './DisplayDate';

export default function* rootSaga() {
  yield all([...moodsSaga, ...employeesSaga, ...listMoodOfEmployeeSaga, ...displayDateSaga]);
}
