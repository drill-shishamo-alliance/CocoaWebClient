import { displayDateState, tabName } from 'src/states/DisplayDate/DisplayDate';
import displayDateAction from 'src/actions/DisplayDate/DisplayDateAction';
import displayDateActionType from 'src/actions/DisplayDate/DisplayDateActionType';

const initialState: displayDateState = {
  displaySpan: [], // 現在表示されている気分の期間
  displayDate: new Date(), // 現在表示されている年と月
  weekIndex: 0,
  displayTab: tabName.week,
};

const displayDate = (
  state: displayDateState = initialState,
  action: displayDateAction
): displayDateState => {
  let newDate = new Date();
  switch (action.type) {
    case displayDateActionType.NEXT_WEEK:
      return {
        ...state,
        weekIndex: state.weekIndex + 1,
      };

    case displayDateActionType.PREVIOUS_WEEK:
      return {
        ...state,
        weekIndex: state.weekIndex - 1,
      };
    case displayDateActionType.NEXT_MONTH:
      newDate = new Date();
      newDate.setMonth(state.displayDate.getMonth() + 1);
      return {
        ...state,
        displayDate: newDate,
      };
    case displayDateActionType.PREVIOUS_MONTH:
      newDate = new Date();
      newDate.setMonth(state.displayDate.getMonth() - 1);
      return {
        ...state,
        displayDate: newDate,
      };
    case displayDateActionType.TAB_CLICKED:
      return {
        ...state,
        displayTab: action.payload.tabName,
      };
    default:
      return state;
  }
};

export default displayDate;
