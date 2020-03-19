import Axios from '../Axios';
import MoodOfEmployee from './Model';

export type getListMoodOfEmployeeParams = {
  employee_id: number;
  department_id: number;
  begin_date: number;
  end_date: number;
};

export type getListMoodOfEmployeeResponse = MoodOfEmployee[];

export async function getListMoodOfEmployeeOnAjax(params: getListMoodOfEmployeeParams) {
  try {
    return await Axios.get<getListMoodOfEmployeeResponse>('/listMoodOfEmployee', {
      params,
    });
  } catch (e) {
    throw new Error(e);
  }
}
