import UserAction from 'src/actions/User/Action';
import UserActionType from 'src/actions/User/ActionType';
import UserState from 'src/states/User/User';

const initialState: UserState = {
  employeeId: 0,
  departmentId: 0,
  isLoggedIn: false,
};

export default (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.POST_LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      };
    case UserActionType.POST_LOGIN_SUCCEEDED:
      return {
        ...state,
        employeeId: action.payload.employee_id,
        departmentId: action.payload.department_id,
        isLoggedIn: true,
      };
    case UserActionType.POST_LOGIN_FAILED:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
