import EmployeesState from 'src/states/Employees/Employees';
import EmployeesAction from 'src/actions/Employees/Action';
import EmployeesActionType from 'src/actions/Employees/ActionType';

const initialState: EmployeesState = {};

const Employees = (
  state: EmployeesState = initialState,
  action: EmployeesAction
): EmployeesState => {
  switch (action.type) {
    case EmployeesActionType.GET_EMPLOYEES_SUCCEEDED:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default Employees;
