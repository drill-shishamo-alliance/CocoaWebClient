import Axios from '../Axios';

export type getListMoodOfEmployeeParams = {
  employeeId: string;
  beginDate: number;
  endDate: number;
};

type mood = {
  id: string;
  punched_at: number;
};

export type getListMoodOfEmployeeResponse = {
  [employee_id: string]: {
    sabordinate_id: string;
    moods: mood[];
  };
};

export async function getListMoodOfEmployeeClient(params: getListMoodOfEmployeeParams) {
  try {
    return await Axios.get<getListMoodOfEmployeeResponse>('/listMoodOfEmployee', {
      params,
    });
  } catch (e) {
    throw new Error(e);
  }
}
