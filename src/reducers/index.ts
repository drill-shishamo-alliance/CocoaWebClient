import { combineReducers } from 'redux';
import employeeMoodsState from './EmployeeMoods/EmployeeMoods';
import MoodsState from './Moods/Moods';
import employeeMoodsDetailsState from './EmployeeMoodsDetails/EmployeeMoodsDetails';

const rootReducer = combineReducers({
  employeeMoodsState,
  MoodsState,
  employeeMoodsDetailsState,
});

export default rootReducer;
