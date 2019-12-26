import Axios from '../Axios';

export type getListMoodOfEmployeeParams = {
  employee_id: string;
  begin_date: number;
  end_date: number;
};

type PunchLog = {
  mood_id: string;
  cause_id: string;
  punched_at: number;
};

export type getListMoodOfEmployeeResponse = {
  [employee_id: string]: {
    subordinate_id: string;
    punch_logs: PunchLog[];
    danger: boolean;
  };
};

export async function getListMoodOfEmployeeOnAjax(params: getListMoodOfEmployeeParams) {
  try {
    return await Axios.get<getListMoodOfEmployeeResponse>('/listMoodOfEmployee', {
      params,
    });
  } catch (e) {
    throw new Error(e);
  }
}
