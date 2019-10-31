import { combineReducers } from 'redux';
import MoodsState from './Moods/Moods';
import currentDisplayedDateState from './CurrentDisplayedDate/CurrentDisplayedDate';
import ListMoodOfEmployee from './ListMoodOfEmployee/ListMoodOfEmployee';
import Employees from './Employees/Employees';

const rootReducer = combineReducers({
  MoodsState,
  currentDisplayedDateState,
  ListMoodOfEmployee,
  Employees,
});

export default rootReducer;
