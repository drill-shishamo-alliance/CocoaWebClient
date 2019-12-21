import { combineReducers } from 'redux';
import MoodsState from './Moods/Moods';
import CausesState from './Causes/Causes';
import displayDateState from './DisplayDate/DisplayDate';
import ListMoodOfEmployee from './ListMoodOfEmployee/ListMoodOfEmployee';
import Employees from './Employees/Employees';

const rootReducer = combineReducers({
  MoodsState,
  CausesState,
  displayDateState,
  ListMoodOfEmployee,
  Employees,
});

export default rootReducer;
