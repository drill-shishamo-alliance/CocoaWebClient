import axios from 'axios';
import FeelingsResponse from './FeelingsResponse/FeelingsResponse';
import JuniorFeelings from './JuniorFeelingsTableResponse/JuniorFeelings';
// import JuniorResponse from './JuniorFeelingsTableResponse/JuniorsResponse';

class JuniorFeelingsApi {
  // public async getJuniorFeelings(id?: number, access_token?: string) {
  //   try {
  //     const response = await axios.get<JuniorsResponse>(
  //       'https://virtserver.swaggerhub.com/jbsHakodate/Cocoa-Core-API/1.0.2/juniors/feelings',
  //       {
  //         headers: {
  //           id,
  //           access_token,
  //           'Access-Control-Allow-Origin': 'http://localhost:3000',
  //         },
  //         responseType: 'json',
  //         data: {},
  //       }
  //     );
  //     return response;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }

  public async getJuniorFeelings(id?: number, access_token?: string) {
    try {
      return await axios.get<JuniorFeelings[]>('http://localhost:3001/juniors', {});
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getFeelings(access_token?: string) {
    try {
      const response = await axios.get<FeelingsResponse>(
        'https://virtserver.swaggerhub.com/jbsHakodate/Cocoa-Core-API/1.0.2/feelings',
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
}

export default new JuniorFeelingsApi();
