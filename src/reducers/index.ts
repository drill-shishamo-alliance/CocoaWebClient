import { combineReducers } from 'redux';
import juniorFeelingsState from './JuniorFeelings/JuniorFeelings';
import FeelingsState from './Feelings/Feelings';

const rootReducer = combineReducers({
  juniorFeelingsState,
  FeelingsState,
});

export default rootReducer;
