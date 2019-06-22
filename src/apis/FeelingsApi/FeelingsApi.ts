import axios from 'axios';
import FeelingsApiResponse from './FeelingsApiResponse';

export default class FeelingsApi {
  public async getFeelings(access_token?: string) {
    try {
      const response = await axios.get<FeelingsApiResponse>(
        'http://virtserver.swaggerhub.com/jbsHakodate/Cocoa-Core-API/1.0.2/feelings',
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
