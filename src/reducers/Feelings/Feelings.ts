import FeelingsState from 'src/apis/FeelingsApi/Feelings';
import FeelingsAction from 'src/actions/Feelings/FeelingsAction';
import FeelingsActionType from 'src/actions/Feelings/FeelingsActionType';

const initialState: FeelingsState[] = [];

const Feelings = (
  state: FeelingsState[] = initialState,
  action: FeelingsAction
): FeelingsState[] => {
  switch (action.type) {
    case FeelingsActionType.GET_FEELINGS_SUCCEEDED:
      return [...action.payload];
    default:
      return state;
  }
};

export default Feelings;
