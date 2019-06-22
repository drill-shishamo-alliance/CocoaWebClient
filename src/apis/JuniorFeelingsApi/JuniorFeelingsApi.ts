import axios from 'axios';
import JuniorsResponse from './JuniorsResponse';

export default class JuniorFeelingsApi {
  public async getJuniorFeelings(id?: number, access_token?: string) {
    try {
      const response = await axios.get<JuniorsResponse>(
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
