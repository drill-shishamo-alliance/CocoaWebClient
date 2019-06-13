import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { JuniorFeeling, JuniorFeelingsModel } from 'src/states/JuniorFeelingsState';

export default class JuniorFeelingsApi {
  public async getJuniorFeelings(id?: number, access_token?: string) {
    try {
      const response: AxiosResponse<JuniorFeelingsModel> = await axios.get(
        'http://13.78.9.42:8080/juniors/feelings',
        {
          headers: {
            id,
            access_token,
            'Access-Control-Allow-Origin': 'http://localhost:3000',
          },
          responseType: 'json',
          data: {},
        }
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  public mapGetJuniorFeelingsResponseToJuniorFeelings(
    response: JuniorFeelingsModel
  ): JuniorFeeling[] {
    const juniorFeelings: JuniorFeeling[] = response.juniors.map(
      j =>
        ({
          junior: j.name,
          weekFeelings: j.feelings.map(f => ({
            morning: f.icon_path,
            evening: f.icon_path,
          })),
        } as JuniorFeeling)
    );

    return juniorFeelings;
  }
}
