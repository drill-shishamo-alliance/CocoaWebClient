import { combineReducers } from 'redux';
import employeeMoodsState from './EmployeeMoods/EmployeeMoods';
import MoodsState from './Moods/Moods';
import employeeMoodsDetailsState from './EmployeeMoodsDetails/EmployeeMoodsDetails';
import currentDisplayedDateState from './CurrentDisplayedDate/CurrentDisplayedDate';

const rootReducer = combineReducers({
  employeeMoodsState,
  MoodsState,
  employeeMoodsDetailsState,
  currentDisplayedDateState,
});

export default rootReducer;
