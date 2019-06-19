import axios, { AxiosResponse } from 'axios';
import FeelingsResponse from './FeelingsResponse';
import { FeelingsDummy } from 'src/dummy/FeelingsDummy';

export default class JuniorFeelingsApi {
  public async getFeelings(access_token?: string) {
    try {
      const response: AxiosResponse<FeelingsResponse> = await axios.get(
        'http://13.78.9.42:8080/feelings',
        {
          headers: {
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

  public getFeelingsMock() {
    return new Promise<FeelingsResponse[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(FeelingsDummy);
      }, 0.1);
    });
  }
}
