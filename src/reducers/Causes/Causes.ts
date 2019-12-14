import CausesState from 'src/states/Causes/Causes';
import CausesAction from 'src/actions/Causes/Action';
import CausesActionType from 'src/actions/Causes/ActionType';

const initialState: CausesState = {};

const Causes = (state: CausesState = initialState, action: CausesAction): CausesState => {
  switch (action.type) {
    case CausesActionType.GET_CAUSES_SUCCEEDED:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default Causes;
