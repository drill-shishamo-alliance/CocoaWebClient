import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { JuniorFeeling, JuniorFeelingsModel } from 'src/states/JuniorFeelingsState';

export default class JuniorFeelingsApi {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: '13.78.9.42:8080',
    });
  }

  public async getJuniorFeelings(id: number, access_token: string) {
    try {
      const response: AxiosResponse<JuniorFeelingsModel> = await this.axios.get(
        '/juniors/feelings',
        {
          headers: {
            id,
            access_token,
          },
        }
      );
      return response;
    } catch {
      throw new Error('Catch error at GET:/juniors/feelings');
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
