import { all } from 'redux-saga/effects';
import juniorFeelingsSaga from './JuniorFeelings/JuniorFeelingsSaga';
import FeelingsSaga from './Feelings/FeelingsSaga';

export default function* rootSaga() {
  yield all([...juniorFeelingsSaga, ...FeelingsSaga]);
}
