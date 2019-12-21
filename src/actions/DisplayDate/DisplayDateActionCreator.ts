import displayDateActionType from './DisplayDateActionType';
import { createStandardAction, PayloadAC } from 'typesafe-actions';
import { tabName } from 'src/states/DisplayDate/DisplayDate';

export const changeWeekSpanButtonClicked = createStandardAction(
  displayDateActionType.CHANGE_WEEK_SPAN_BUTTON_CLICKED
)<PayloadAC<string, void>>();
export const changeMonthButtonClicked = createStandardAction(
  displayDateActionType.CHANGE_MONTH_BUTTON_CLICKED
)<PayloadAC<string, void>>();

export const nextWeek = createStandardAction(displayDateActionType.NEXT_WEEK)<void>();
export const previousWeek = createStandardAction(displayDateActionType.PREVIOUS_WEEK)<void>();
export const nextMonth = createStandardAction(displayDateActionType.NEXT_MONTH)<void>();
export const previousMonth = createStandardAction(displayDateActionType.PREVIOUS_MONTH)<void>();
export const tabClicked = createStandardAction(displayDateActionType.TAB_CLICKED)<{
  tabName: tabName;
}>();

export const updateDisplayTab = createStandardAction(displayDateActionType.UPDATE_DISPLAY_TAB)<{
  displayTab: tabName;
}>();
export const updateDisplaySpan = createStandardAction(displayDateActionType.UPDATE_DISPLAY_SPAN)<{
  displaySpan: Date[];
}>();
