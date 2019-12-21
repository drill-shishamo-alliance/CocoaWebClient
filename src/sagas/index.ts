import { all } from 'redux-saga/effects';
import { moodsSaga } from './Moods';
import { employeesSaga } from './Employees';
import { listMoodOfEmployeeSaga } from './ListMoodOfEmployee';
import { displayDateSaga } from './DisplayDate';
import { causesSasa } from './Causes';

export default function* rootSaga() {
  yield all([
    ...moodsSaga,
    ...causesSasa,
    ...employeesSaga,
    ...listMoodOfEmployeeSaga,
    ...displayDateSaga,
  ]);
}
