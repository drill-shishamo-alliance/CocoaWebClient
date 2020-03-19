import { all } from 'redux-saga/effects';
import { moodsSaga } from './Moods';
import { employeesSaga } from './Employees';
import { listMoodOfEmployeeSaga } from './ListMoodOfEmployee';
import { displayDateSaga } from './DisplayDate';
import { causesSasa } from './Causes';
import { departmentsSaga } from './Departments';
import { listMoodOfDepartmentSaga } from './ListMoodOfDepartment';
import userSagas from './User';

export default function* rootSaga() {
  yield all([
    ...moodsSaga,
    ...causesSasa,
    ...employeesSaga,
    ...listMoodOfEmployeeSaga,
    ...displayDateSaga,
    ...departmentsSaga,
    ...listMoodOfDepartmentSaga,
    ...userSagas,
  ]);
}
