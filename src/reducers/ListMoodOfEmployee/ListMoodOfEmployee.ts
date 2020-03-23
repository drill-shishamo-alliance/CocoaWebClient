import ListMoodOfEmployeeAction from 'src/actions/ListMoodOfEmployee/Action';
import ListMoodOfEmployeeActionType from 'src/actions/ListMoodOfEmployee/ActionType';
import listMoodOfEmployeeState from 'src/states/ListMoodOfEmployee/ListMoodOfEmployee';

const initialState: listMoodOfEmployeeState = {};

const ListMoodOfEmployee = (
  state: listMoodOfEmployeeState = initialState,
  action: ListMoodOfEmployeeAction
): listMoodOfEmployeeState => {
  switch (action.type) {
    case ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_SUCCEEDED:
      return { ...state, ...action.payload };
    case ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_FAILED:
      return {};
    default:
      return state;
  }
};

export default ListMoodOfEmployee;
