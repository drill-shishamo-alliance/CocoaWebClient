import Axios from './Axios';
import MoodOfEmployee from './Model';

export type getListMoodOfEmployeeParams = {
  employee_id: number;
  begin_date: number;
  end_date: number;
};

export type getListMoodOfEmployeeResponse = MoodOfEmployee[];

export async function getListMoodOfEmployeeOnAjax({
  employee_id,
  begin_date,
  end_date,
}: getListMoodOfEmployeeParams) {
  try {
    return await Axios.get<getListMoodOfEmployeeResponse>(`/punchlogs/${employee_id}`, {
      params: {
        begin_date,
        end_date,
      },
    });
  } catch (e) {
    throw new Error(e);
  }
}
