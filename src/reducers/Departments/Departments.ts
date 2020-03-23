import DepartmentsState from 'src/states/Departments/Departments';
import DepartmentsAction from 'src/actions/Departments/Action';
import DepartmentsActionType from 'src/actions/Departments/ActionType';

const initialState: DepartmentsState = {
  department_id1: {
    id: 'department_id1',
    name: 'AC本部',
  },
  department_id2: {
    id: 'department_id2',
    name: 'BA本部',
  },
  department_id3: {
    id: 'department_id3',
    name: 'CS本部',
  },
};

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
