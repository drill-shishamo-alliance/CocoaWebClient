import UserActionType from './ActionType';
import { createAsyncAction } from 'typesafe-actions';
import { postLoginParams } from 'src/apis/User/PostLoginApi';
import UserModel from 'src/apis/User/Model';

export const postLogin = createAsyncAction(
  UserActionType.POST_LOGIN_REQUEST,
  UserActionType.POST_LOGIN_SUCCEEDED,
  UserActionType.POST_LOGIN_FAILED
)<postLoginParams, UserModel, undefined>();
