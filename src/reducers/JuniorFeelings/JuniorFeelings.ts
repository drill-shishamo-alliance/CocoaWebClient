import JuniorsState from 'src/states/JuniorFeelings/JuniorFeelingsState';
import JuniorFeelingsAction from 'src/actions/JuniorFeelings/JuniorFeelingsAction';
import JuniorFeelingsActionType from 'src/actions/JuniorFeelings/JuniorFeelingsActionType';

const initialState: JuniorsState = {
  juniors: [],
  details: {
    selectJunior: undefined,
  },
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
    case JuniorFeelingsActionType.SELECT_JUNIOR:
      return {
        ...state,
        details: {
          ...state.details,
          selectJunior: action.payload,
        },
      };
    default:
      return state;
  }
};

export default juniorFeelings;
