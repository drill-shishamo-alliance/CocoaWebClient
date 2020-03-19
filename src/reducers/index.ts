import { combineReducers } from 'redux';
import MoodsState from './Moods/Moods';
import CausesState from './Causes/Causes';
import displayDateState from './DisplayDate/DisplayDate';
import ListMoodOfEmployee from './ListMoodOfEmployee/ListMoodOfEmployee';
import Employees from './Employees/Employees';
import Departments from './Departments/Departments';
import ListMoodOfDepartment from './ListMoodOfDepartment/ListMoodOfDepartment';
import UserState from './User/User';

const rootReducer = combineReducers({
  MoodsState,
  CausesState,
  displayDateState,
  ListMoodOfEmployee,
  Employees,
  Departments,
  ListMoodOfDepartment,
  UserState,
});

export default rootReducer;
