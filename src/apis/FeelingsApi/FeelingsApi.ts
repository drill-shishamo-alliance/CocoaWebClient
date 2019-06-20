import axios, { AxiosResponse } from 'axios';
import FeelingsResponse from './FeelingsResponse';

export default class FeelingsApi {
  public async getFeelings(access_token?: string) {
    try {
      const response = await axios.get<FeelingsResponse[]>(
        'http://virtserver.swaggerhub.com/jbsHakodate/Cocoa-Core-API/1.0.2/feelings'
      );
      console.log('api');
      console.log(JSON.stringify(response.data));
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  // public getFeelingsMock() {
  //   return new Promise<FeelingsResponse[]>((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(FeelingsDummy);
  //     }, 0.1);
  //   });
  // }
}
