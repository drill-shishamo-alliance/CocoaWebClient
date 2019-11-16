import ListMoodOfEmployee from './Model';
import Axios from '../Axios';

export type getListMoodOfEmployeeParams = {
  employeeId: string;
  beginDate: Date;
  endDate: Date;
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
