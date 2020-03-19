import UserModel from './Model';
import Axios from '../Axios';

export type postLoginParams = {
  id: string;
  password: string;
};

export async function postLoginApi(params: postLoginParams) {
  try {
    return await Axios.post<UserModel>('/login', {
      params,
    });
  } catch (e) {
    throw new Error(e);
  }
}
