import Mood from './Model';
import Axios from '../Axios';

export type getMoodsParams = {
  access_token?: string;
};

export type getMoodsResponse = Mood[];

export async function getMoodsClient({ access_token }: getMoodsParams) {
  try {
    return await Axios.get<getMoodsResponse>('/moods', {
      params: {
        access_token,
      },
    });
  } catch (e) {
    throw new Error(e);
  }
}
