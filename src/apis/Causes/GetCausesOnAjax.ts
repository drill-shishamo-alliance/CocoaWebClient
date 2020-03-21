import Axios from '../Axios';
import Cause from './Model';

export type getCausesParams = {
  department_id?: number;
};

export type getCausesResponse = Cause[];

export async function getCausesOnAjax({ department_id }: getCausesParams) {
  try {
    return await Axios.get<getCausesResponse>('/causes', {
      params: {
        department_id,
      },
    });
  } catch (e) {
    throw new Error(e);
  }
}
