import { combineReducers } from 'redux';
import employeeMoodsState from './EmployeeMoods/EmployeeMoods';
import MoodsState from './Moods/Moods';

const rootReducer = combineReducers({
  employeeMoodsState,
  MoodsState,
});

export default rootReducer;
