import ListMoodOfEmployee from './Model';
import Axios from '../Axios';

export type getListMoodOfEmployeeParams = {
  employeeId: string;
  beginDate: string;
  endDate: string;
};

export type getListMoodOfEmployeeResponse = ListMoodOfEmployee;

export async function getListMoodOfEmployeeClient(params: getListMoodOfEmployeeParams) {
  try {
    return await Axios.get<getListMoodOfEmployeeResponse>('/listMoodOfEmployee', {
      params,
    });
  } catch (e) {
    throw new Error(e);
  }
}
