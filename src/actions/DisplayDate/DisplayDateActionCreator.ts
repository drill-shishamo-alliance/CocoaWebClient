import displayDateActionType from './DisplayDateActionType';
import { createStandardAction, PayloadAC } from 'typesafe-actions';

export const ChangeDateSpanButtonClicked = createStandardAction(
  displayDateActionType.CHANGE_DATE_SPAN_BUTTON_CLICKED
)<PayloadAC<string, void>>();

export const nextWeek = createStandardAction(displayDateActionType.NEXT_WEEK)<void>();
export const previousWeek = createStandardAction(displayDateActionType.PREVIOUS_WEEK)<void>();
export const nextMonth = createStandardAction(displayDateActionType.NEXT_MONTH)<void>();
export const previousMonth = createStandardAction(displayDateActionType.PREVIOUS_MONTH)<void>();

export const tabClicked = createStandardAction(displayDateActionType.TAB_CLICKED)<{
  tabName: string;
}>();
