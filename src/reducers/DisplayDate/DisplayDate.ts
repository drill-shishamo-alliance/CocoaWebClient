import { displayDateState, tabName } from 'src/states/DisplayDate/DisplayDate';
import displayDateAction from 'src/actions/DisplayDate/DisplayDateAction';
import displayDateActionType from 'src/actions/DisplayDate/DisplayDateActionType';
import getWeekIndex from 'src/utilsLogic/Date/GetWeekNumber';
import { GetPastFiveDays } from 'src/components/HomeScreen/Table/utils/GetPastFiveDays';
import getThisWeekMonday from 'src/utilsLogic/Date/GetThisWeekMonday';

const initialDisplayMonday = getThisWeekMonday(new Date());
const initialWeekIndex = getWeekIndex(initialDisplayMonday);
const initialDisplaySpan = GetPastFiveDays();

const initialState: displayDateState = {
  displayMonday: new Date(initialDisplayMonday), // 現在表示されている年と月
  weekIndex: initialWeekIndex,
  displaySpan: initialDisplaySpan, // 現在表示されている気分の期間
  displayTab: tabName.week,
};

const displayDate = (
  state: displayDateState = initialState,
  action: displayDateAction
): displayDateState => {
  let newDisplayMonday = new Date();
  let newWeekIndex = 1;
  switch (action.type) {
    case displayDateActionType.NEXT_WEEK:
      newDisplayMonday = new Date(state.displayMonday.setDate(state.displayMonday.getDate() + 7));
      newWeekIndex = getWeekIndex(newDisplayMonday);
      return {
        ...state,
        displayMonday: newDisplayMonday,
        weekIndex: newWeekIndex,
      };
    case displayDateActionType.PREVIOUS_WEEK:
      newDisplayMonday = new Date(state.displayMonday.setDate(state.displayMonday.getDate() - 7));
      newWeekIndex = getWeekIndex(newDisplayMonday);
      return {
        ...state,
        displayMonday: newDisplayMonday,
        weekIndex: newWeekIndex,
      };
    case displayDateActionType.NEXT_MONTH:
      newDisplayMonday = new Date(state.displayMonday.setMonth(state.displayMonday.getMonth() + 1));
      newWeekIndex = getWeekIndex(newDisplayMonday);
      return {
        ...state,
        displayMonday: newDisplayMonday,
        weekIndex: newWeekIndex,
      };
    case displayDateActionType.PREVIOUS_MONTH:
      newDisplayMonday = new Date(state.displayMonday.setMonth(state.displayMonday.getMonth() - 1));
      newWeekIndex = getWeekIndex(newDisplayMonday);
      return {
        ...state,
        displayMonday: newDisplayMonday,
        weekIndex: newWeekIndex,
      };
    case displayDateActionType.UPDATE_DISPLAY_TAB:
      return {
        ...state,
        displayTab: action.payload.displayTab,
      };
    case displayDateActionType.UPDATE_DISPLAY_SPAN:
      return {
        ...state,
        displaySpan: action.payload.displaySpan,
      };
    case displayDateActionType.RESET_DATE:
      return {
        ...state,
        displayMonday: new Date(initialDisplayMonday),
        weekIndex: initialWeekIndex,
      };
    default:
      return state;
  }
};

export default displayDate;
