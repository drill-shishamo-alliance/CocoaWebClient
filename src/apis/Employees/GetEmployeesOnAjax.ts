import Axios from '../Axios';
import Employee from './Model';

export type getEmployeesParams = {};

export type getEmployeesResponse = Employee[];

export async function getEmployeesOnAjax(_: getEmployeesParams) {
  try {
    return await Axios.get<getEmployeesResponse>('/employees');
  } catch (e) {
    throw new Error(e);
  }
}
