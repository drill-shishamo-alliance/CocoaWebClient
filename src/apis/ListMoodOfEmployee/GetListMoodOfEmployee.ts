import Axios from '../Axios';
import MoodOfEmployee from './Model';

export type getListMoodOfEmployeeParams = {
  employeeId: string;
  beginDate: number;
  endDate: number;
};

export type getListMoodOfEmployeeResponse = MoodOfEmployee[];

export async function getListMoodOfEmployeeClient(params: getListMoodOfEmployeeParams) {
  try {
    return await Axios.get<getListMoodOfEmployeeResponse>('/listMoodOfEmployee', {
      params,
    });
  } catch (e) {
    throw new Error(e);
  }
}
