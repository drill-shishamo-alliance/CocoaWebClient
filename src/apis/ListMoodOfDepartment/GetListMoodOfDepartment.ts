import Axios from '../Axios';
import ListMoodOfDepartment from './Model';

export type GetListMoodOfDepartmentParams = {
  department_id: string;
  begin_date: number;
  end_date: number;
};

export type GetListMoodOfDepartmentResponse = ListMoodOfDepartment;

export async function getListMoodOfDepartmentOnAjax(params: GetListMoodOfDepartmentParams) {
  try {
    return await Axios.get<GetListMoodOfDepartmentResponse>('/listMoodOfDepartment', {
      params,
    });
  } catch (e) {
    throw new Error(e);
  }
}
