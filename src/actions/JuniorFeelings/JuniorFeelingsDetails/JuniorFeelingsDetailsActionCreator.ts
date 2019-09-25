import { createAsyncAction } from 'typesafe-actions';
import JuniorFeelingsDetailsActionType from './JuniorFeelingsDetailsActionType';
import WeekFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/WeekFeelings';

export const getJuniorMonthFeelings = createAsyncAction(
  JuniorFeelingsDetailsActionType.GET_JUNIOR_MONTH_FEELINGS_REQUEST,
  JuniorFeelingsDetailsActionType.GET_JUNIOR_MONTH_FEELINGS_SUCCESSED,
  JuniorFeelingsDetailsActionType.GET_JUNIOR_MONTH_FEELINGS_FAILED
)<undefined, WeekFeelings[], undefined>();

// 月を受け取ってその月のデータを返す
// export const getJuniorMonthFeelings = createAsyncAction(
//     JuniorFeelingsDetailsActionType.GET_JUNIOR_MONTH_FEELINGS_REQUEST,
//     JuniorFeelingsDetailsActionType.GET_JUNIOR_MONTH_FEELINGS_SUCCESSED,
//     JuniorFeelingsDetailsActionType.GET_JUNIOR_MONTH_FEELINGS_FAILED
//   )<{year: number, month: number},  WeekFeelings[], undefined>();
