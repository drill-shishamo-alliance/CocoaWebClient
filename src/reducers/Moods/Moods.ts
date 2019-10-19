import MoodsState from 'src/apis/EmployeeMoodsApi/MoodsResponse/Moods';
import MoodsAction from 'src/actions/Moods/MoodsAction';
import MoodsActionType from 'src/actions/Moods/MoodsActionType';

const initialState: MoodsState[] = [];

const Moods = (state: MoodsState[] = initialState, action: MoodsAction): MoodsState[] => {
  switch (action.type) {
    case MoodsActionType.GET_MOODS_SUCCEEDED:
      return [...action.payload];
    default:
      return state;
  }
};

export default Moods;
