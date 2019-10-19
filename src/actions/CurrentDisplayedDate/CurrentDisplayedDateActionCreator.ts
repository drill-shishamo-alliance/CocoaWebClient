import { createStandardAction } from 'typesafe-actions';
import CurrentDisplayedDateActionType from './CurrentDisplayedDateActionType';

export const nextWeek = createStandardAction(CurrentDisplayedDateActionType.NEXT_WEEK)<undefined>();
export const previousWeek = createStandardAction(CurrentDisplayedDateActionType.PREVIOUS_WEEK)<
  void
>();
export const nextMonth = createStandardAction(CurrentDisplayedDateActionType.NEXT_MONTH)<
  undefined
>();
export const previousMonth = createStandardAction(CurrentDisplayedDateActionType.PREVIOUS_MONTH)<
  undefined
>();
