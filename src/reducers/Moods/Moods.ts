import MoodsState from 'src/states/Moods/Moods';
import MoodsAction from 'src/actions/Moods/Action';
import MoodsActionType from 'src/actions/Moods/ActionType';

const initialState: MoodsState = {};

const Moods = (state: MoodsState = initialState, action: MoodsAction): MoodsState => {
  switch (action.type) {
    case MoodsActionType.GET_MOODS_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default Moods;
