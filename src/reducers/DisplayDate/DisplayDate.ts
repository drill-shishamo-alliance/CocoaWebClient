import { displayDateState, tabName } from 'src/states/DisplayDate/DisplayDate';
import displayDateAction from 'src/actions/DisplayDate/DisplayDateAction';
import displayDateActionType from 'src/actions/DisplayDate/DisplayDateActionType';
import getWeekIndex from 'src/utilsLogic/Date/GetWeekNumber';
import { GetPastFiveDays } from 'src/components/HomeScreen/Table/utils/GetPastFiveDays';

const initialDate = new Date();
const initialWeekIndex = getWeekIndex(initialDate);
const initialDisplaySpan = GetPastFiveDays();

const initialState: displayDateState = {
  displayDate: initialDate, // 現在表示されている年と月
  weekIndex: initialWeekIndex,
  displaySpan: initialDisplaySpan, // 現在表示されている気分の期間
  displayTab: tabName.week,
};

const displayDate = (
  state: displayDateState = initialState,
  action: displayDateAction
): displayDateState => {
  let newDisplayDate = new Date();
  let newWeekIndex = 1;
  switch (action.type) {
    case displayDateActionType.NEXT_WEEK:
      newDisplayDate = new Date(state.displayDate.setDate(state.displayDate.getDate() + 7));
      newWeekIndex = getWeekIndex(newDisplayDate);
      return {
        ...state,
        displayDate: newDisplayDate,
        weekIndex: newWeekIndex,
      };
    case displayDateActionType.PREVIOUS_WEEK:
      newDisplayDate = new Date(state.displayDate.setDate(state.displayDate.getDate() - 7));
      newWeekIndex = getWeekIndex(newDisplayDate);
      return {
        ...state,
        displayDate: newDisplayDate,
        weekIndex: newWeekIndex,
      };
    case displayDateActionType.NEXT_MONTH:
      newDisplayDate = new Date(state.displayDate.setMonth(state.displayDate.getMonth() + 1));
      newWeekIndex = getWeekIndex(newDisplayDate);
      return {
        ...state,
        displayDate: newDisplayDate,
        weekIndex: newWeekIndex,
      };
    case displayDateActionType.PREVIOUS_MONTH:
      newDisplayDate = new Date(state.displayDate.setMonth(state.displayDate.getMonth() - 1));
      newWeekIndex = getWeekIndex(newDisplayDate);
      return {
        ...state,
        displayDate: newDisplayDate,
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
    default:
      return state;
  }
};

export default displayDate;
