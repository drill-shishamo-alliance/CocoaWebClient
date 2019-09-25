import WeekFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/WeekFeelings';
import JuniorFeelingsDetailsAction from 'src/actions/JuniorFeelings/JuniorFeelingsDetails/JuniorFeelingsDetailsAction';
import JuniorFeelingsDetailsActionType from 'src/actions/JuniorFeelings/JuniorFeelingsDetails/JuniorFeelingsDetailsActionType';

const initialState: WeekFeelings[] = [];

const juniorFeelingsDetails = (
  state: WeekFeelings[] = initialState,
  action: JuniorFeelingsDetailsAction
): WeekFeelings[] => {
  switch (action.type) {
    case JuniorFeelingsDetailsActionType.GET_JUNIOR_MONTH_FEELINGS_SUCCESSED:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default juniorFeelingsDetails;
