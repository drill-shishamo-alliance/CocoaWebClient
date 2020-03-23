import Axios from './Axios';
import Employee from './Model';

export type getEmployeesParams = {
  departmentId: number;
};

export type getEmployeesResponse = Employee[];

export async function getEmployeesOnAjax({ departmentId }: getEmployeesParams) {
  try {
    return await Axios.get<getEmployeesResponse>(`/departments/${departmentId}/employees`);
  } catch (e) {
    throw new Error(e);
  }
}
