import EmployeesState from 'src/states/EmployeeMoods/EmployeeMoodsState';
import EmployeeMoodsAction from 'src/actions/EmployeeMoods/EmployeeMoodsAction';
import EmployeeMoodsActionType from 'src/actions/EmployeeMoods/EmployeeMoodsActionType';

const initialState: EmployeesState = {
  employees: [],
  details: {
    selectEmployee: undefined,
  },
};

const employeeMoods = (
  state: EmployeesState = initialState,
  action: EmployeeMoodsAction
): EmployeesState => {
  switch (action.type) {
    case EmployeeMoodsActionType.GET_EMPLOYEE_MOODS_SUCCEEDED:
      return {
        ...state,
        employees: [...action.payload],
      };
    case EmployeeMoodsActionType.SELECT_EMPLOYEE:
      return {
        ...state,
        details: {
          ...state.details,
          selectEmployee: action.payload,
        },
      };
    default:
      return state;
  }
};

export default employeeMoods;
