import { createAsyncAction } from 'typesafe-actions';
import EmployeeMoodsDetailsActionType from './EmployeeMoodsDetailsActionType';
import EmployeeMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';

// 月を受け取ってその月のデータを返す
export const getEmployeeMonthMoods = createAsyncAction(
  EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_REQUEST,
  EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_SUCCESSED,
  EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_FAILED
)<{ year: number; month: number }, EmployeeMoods[], undefined>();
