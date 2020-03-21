import Mood from './Model';
import Axios from './Axios';

export type getMoodsParams = {
  departmentId: number;
};

export type getMoodsResponse = Mood[];

export async function getMoodsOnAjax({ departmentId }: getMoodsParams) {
  try {
    return await Axios.get<getMoodsResponse>(`/moods/${departmentId}`);
  } catch (e) {
    throw new Error(e);
  }
}
