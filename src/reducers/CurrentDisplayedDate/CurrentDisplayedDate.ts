import { CurrentDisplayedDateState } from 'src/states/CurrentDisplayedDate/CurrentDisplayedDate';
import CurrentDisplayedDateAction from 'src/actions/CurrentDisplayedDate/CurrentDisplayedDateAction';
import CurrentDisplayedDateActionType from 'src/actions/CurrentDisplayedDate/CurrentDisplayedDateActionType';

// 日付を与えるとその日が含まれている月~金までの日付を返す
const setDisplayedDates = (date: string): string[] => {
  return [''];
};

// 月を与えるとその月の全ての日付を返す
const setDisplayedMonths = (month: string): string[] => {
  return [''];
};

const initialState: CurrentDisplayedDateState = {
  displayedDates: setDisplayedDates(),
  displayedMonths: setDisplayedMonths(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

const currentDisplayedDate = (
  state: CurrentDisplayedDateState = initialState,
  action: CurrentDisplayedDateAction
): CurrentDisplayedDateState => {
  switch (action.type) {
    case CurrentDisplayedDateActionType.NEXT_WEEK:
      return {
        ...state,
        weekIndex: state.weekIndex + 1,
      };
    case CurrentDisplayedDateActionType.PREVIOUS_WEEK:
      return {
        ...state,
        weekIndex: state.weekIndex - 1,
      };
    case CurrentDisplayedDateActionType.NEXT_MONTH:
      return {
        ...state,
        month: state.month + 1,
      };
    case CurrentDisplayedDateActionType.PREVIOUS_MONTH:
      return {
        ...state,
        month: state.month - 1,
      };
    default:
      return state;
  }
};

export default currentDisplayedDate;
