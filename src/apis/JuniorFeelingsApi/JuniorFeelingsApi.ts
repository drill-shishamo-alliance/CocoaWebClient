import axios, { AxiosResponse } from 'axios';
import JuniorFeelingsResponse from './JuniorFeelingsResponse';

export default class JuniorFeelingsApi {
  public async getJuniorFeelings(id?: number, access_token?: string) {
    try {
      const response: AxiosResponse<JuniorFeelingsResponse[]> = await axios.get(
        'http://virtserver.swaggerhub.com/jbsHakodate/Cocoa-Core-API/1.0.2/juniors/feelings',
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
      console.log(JSON.stringify(response.data));
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  // public getJuniorFeelingsMock() {
  //   return new Promise<JuniorFeelingsResponse[]>((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(JuniorFeelingsDummy);
  //     }, 0.1);
  //   });
  // }

  // public mapGetJuniorFeelingsResponseToJuniorFeelings(
  //   response: JuniorFeelingsResponse
  // ): JuniorFeelingsState {
  //   const juniorFeelings: JuniorFeelingsState = ({
  //     uuid: response.uuid,
  //     name: response.name,
  //     weekFeelings: {
  //       monday: {
  //         date: response.week_feelings.monday.date,

  //       }
  //     }
  //   })

  //   return juniorFeelings;
  // }
}
