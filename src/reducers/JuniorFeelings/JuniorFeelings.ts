import { JuniorFeeling } from 'src/states/JuniorFeelingsState';
import JuniorFeelingsAction from 'src/actions/JuniorFeelings/JuniorFeelingsAction';
import JuniorFeelingsActionType from 'src/actions/JuniorFeelings/JuniorFeelingsActionType';

const initialState: JuniorFeeling[] = [];

const juniorFeelings = (
  state: JuniorFeeling[] = initialState,
  action: JuniorFeelingsAction
): JuniorFeeling[] => {
  switch (action.type) {
    case JuniorFeelingsActionType.GET_JUNIOR_FEELINGS_SUCCEEDED:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default juniorFeelings;
