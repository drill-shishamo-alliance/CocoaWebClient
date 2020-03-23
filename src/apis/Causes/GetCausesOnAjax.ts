import Axios from './Axios';
import Cause from './Model';

export type getCausesParams = {
  departmentId: number;
};

export type getCausesResponse = Cause[];

export async function getCausesOnAjax({ departmentId }: getCausesParams) {
  try {
    return await Axios.get<getCausesResponse>(`/causes/${departmentId}`);
  } catch (e) {
    throw new Error(e);
  }
}
