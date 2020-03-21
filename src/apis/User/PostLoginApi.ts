import UserModel from './Model';
import axios from './Axios';

export type postLoginParams = {
  id: string;
  password: string;
};

export async function postLoginApi(params: postLoginParams) {
  try {
    return await axios.post<UserModel>('/login', params);
  } catch (e) {
    throw new Error(e);
  }
}
