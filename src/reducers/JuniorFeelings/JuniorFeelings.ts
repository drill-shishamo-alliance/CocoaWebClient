import JuniorsState from 'src/apis/JuniorFeelingsApi/JuniorsResponse';
import JuniorFeelingsAction from 'src/actions/JuniorFeelings/JuniorFeelingsAction';
import JuniorFeelingsActionType from 'src/actions/JuniorFeelings/JuniorFeelingsActionType';

const initialState: JuniorsState = {
  juniors: [],
};

const juniorFeelings = (
  state: JuniorsState = initialState,
  action: JuniorFeelingsAction
): JuniorsState => {
  switch (action.type) {
    case JuniorFeelingsActionType.GET_JUNIOR_FEELINGS_SUCCEEDED:
      return {
        ...state,
        juniors: [...action.payload],
      };
    default:
      return state;
  }
};

export default juniorFeelings;
