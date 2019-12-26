import DepartmentsState from 'src/states/Departments/Departments';
import DepartmentsAction from 'src/actions/Departments/Action';
import DepartmentsActionType from 'src/actions/Departments/ActionType';

const initialState: DepartmentsState = {};

const Departments = (
  state: DepartmentsState = initialState,
  action: DepartmentsAction
): DepartmentsState => {
  switch (action.type) {
    case DepartmentsActionType.GET_DEPARTMENTS_SUCCEEDED:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default Departments;
