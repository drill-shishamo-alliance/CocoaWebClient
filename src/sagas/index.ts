import { all } from 'redux-saga/effects';
import juniorFeelingsSaga from './JuniorFeelings/JuniorFeelingsSaga';

export default function* rootSaga() {
  yield all([...juniorFeelingsSaga]);
}
