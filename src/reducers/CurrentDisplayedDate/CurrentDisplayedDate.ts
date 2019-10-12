import { CurrentDisplayedDateState } from 'src/states/CurrentDisplayedDate/CurrentDisplayedDate';
import CurrentDisplayedDateAction from 'src/actions/CurrentDisplayedDate/CurrentDisplayedDateAction';
import CurrentDisplayedDateActionType from 'src/actions/CurrentDisplayedDate/CurrentDisplayedDateActionType';

const initialState: CurrentDisplayedDateState = {
  weekIndex: 0,
  month: new Date().getMonth(),
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
