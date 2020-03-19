import { takeLatest } from 'redux-saga/effects';
import UserActionType from 'src/actions/User/ActionType';
import { postLoginSaga } from './PostLoginSaga';

const userSagas = [takeLatest(UserActionType.POST_LOGIN_REQUEST, postLoginSaga)];
export default userSagas;
