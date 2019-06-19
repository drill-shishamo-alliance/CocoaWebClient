import JuniorFeelingsState from 'src/apis/JuniorFeelingsApi/JuniorFeelingsResponse';
import JuniorFeelingsAction from 'src/actions/JuniorFeelings/JuniorFeelingsAction';
import JuniorFeelingsActionType from 'src/actions/JuniorFeelings/JuniorFeelingsActionType';

const initialState: JuniorFeelingsState[] = [];

const juniorFeelings = (
  state: JuniorFeelingsState[] = initialState,
  action: JuniorFeelingsAction
): JuniorFeelingsState[] => {
  switch (action.type) {
    case JuniorFeelingsActionType.GET_JUNIOR_FEELINGS_SUCCEEDED:
      return [...action.payload];
    default:
      return state;
  }
};

export default juniorFeelings;
