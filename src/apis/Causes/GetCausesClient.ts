import Causes from './Model';
import Axios from '../Axios';

export type getCausesParams = {
  department_id?: string;
};

export type getCausesResponse = Causes;

export async function getCausesOnHTTP({ department_id }: getCausesParams) {
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
