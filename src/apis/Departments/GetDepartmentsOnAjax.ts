import Axios from '../Axios';
import Departments from './Model';

export type getDepartmentsParams = {};

export type getDepartmentsResponse = Departments;

export async function getDepartmentsOnAjax(_: getDepartmentsParams) {
  try {
    return await Axios.get<getDepartmentsResponse>('/departments');
  } catch (e) {
    throw new Error(e);
  }
}
