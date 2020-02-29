import { combineReducers } from 'redux';
import MoodsState from './Moods/Moods';
import CausesState from './Causes/Causes';
import displayDateState from './DisplayDate/DisplayDate';
import ListMoodOfEmployee from './ListMoodOfEmployee/ListMoodOfEmployee';
import Employees from './Employees/Employees';
import Departments from './Departments/Departments';
import ListMoodOfDepartment from './ListMoodOfDepartment/ListMoodOfDepartment';

const rootReducer = combineReducers({
  MoodsState,
  CausesState,
  displayDateState,
  ListMoodOfEmployee,
  Employees,
  Departments,
  ListMoodOfDepartment,
});

export default rootReducer;
