import Axios from '../Axios';
import Employees from './Model';

export type getEmployeesParams = {};

export type getEmployeesResponse = Employees;

export async function getEmployeesClient({  }: getEmployeesParams) {
  try {
    return await Axios.get<getEmployeesResponse>('/employees');
  } catch (e) {
    throw new Error(e);
  }
}
