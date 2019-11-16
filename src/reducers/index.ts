import { combineReducers } from 'redux';
import MoodsState from './Moods/Moods';
import displayDateState from './DisplayDate/DisplayDate';
import ListMoodOfEmployee from './ListMoodOfEmployee/ListMoodOfEmployee';
import Employees from './Employees/Employees';

const rootReducer = combineReducers({
  MoodsState,
  displayDateState,
  ListMoodOfEmployee,
  Employees,
});

export default rootReducer;
