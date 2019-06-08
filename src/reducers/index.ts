import { combineReducers } from 'redux';
import juniorFeelingsState from './JuniorFeelings/JuniorFeelings';

const rootReducer = combineReducers({
  juniorFeelingsState,
});

export default rootReducer;
