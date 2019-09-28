import { createAsyncAction } from 'typesafe-actions';
import EmployeeMoodsDetailsActionType from './EmployeeMoodsDetailsActionType';
import WeekMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/WeekMoods';

export const getEmployeeMonthMoods = createAsyncAction(
  EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_REQUEST,
  EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_SUCCESSED,
  EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_FAILED
)<undefined, WeekMoods[], undefined>();

// 月を受け取ってその月のデータを返す
// export const getEmployeeMonthMoods = createAsyncAction(
//     EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_REQUEST,
//     EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_SUCCESSED,
//     EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_FAILED
//   )<{year: number, month: number},  WeekMoods[], undefined>();
