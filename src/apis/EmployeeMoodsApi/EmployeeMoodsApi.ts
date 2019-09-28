import axios from 'axios';
import MoodsResponse from './MoodsResponse/MoodsResponse';
import EmployeeMoods from './EmployeeMoodsTableResponse/EmployeeMoods';
import WeekMoods from './EmployeeMoodsTableResponse/WeekMoods';
// import EmployeeResponse from './EmployeeMoodsTableResponse/EmployeesResponse';

class EmployeeMoodsApi {
  // public async getEmployeeMoods(id?: number, access_token?: string) {
  //   try {
  //     const response = await axios.get<EmployeesResponse>(
  //       'https://virtserver.swaggerhub.com/jbsHakodate/Cocoa-Core-API/1.0.2/employees/moods',
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

  public async getEmployeeMoods(id?: number, access_token?: string) {
    try {
      return await axios.get<EmployeeMoods[]>('http://localhost:3001/employees', {});
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getMoods(access_token?: string) {
    try {
      const response = await axios.get<MoodsResponse>(
        'https://virtserver.swaggerhub.com/jbsHakodate/Cocoa-Core-API/1.0.2/moods',
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

  public async getEmployeeMonthMoods() {
    try {
      return await axios.get<WeekMoods[]>('http://localhost:3001/month', {});
    } catch (error) {
      throw new Error(error);
    }
  }

  // 年と月を受け取ってqueryにのっけてリクエストを送る
  // public async getEmployeeMonthMoods(year: number, month: number) {
  //   try {
  //     return await axios.get<WeekMoods[]>('url', {
  //       params: {
  //         year: year,
  //         month: month,
  //       },
  //     });
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }
}

export default new EmployeeMoodsApi();
