import ListMoodOfEmployeeState from 'src/states/ListMoodOfEmployee/ListMoodOfEmployee';
import ListMoodOfEmployeeAction from 'src/actions/ListMoodOfEmployee/Action';
import ListMoodOfEmployeeActionType from 'src/actions/ListMoodOfEmployee/ActionType';

const initialState: ListMoodOfEmployeeState = {};

const ListMoodOfEmployee = (
  state: ListMoodOfEmployeeState = initialState,
  action: ListMoodOfEmployeeAction
): ListMoodOfEmployeeState => {
  switch (action.type) {
    case ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_SUCCEEDED:
      return { ...action.payload };
    default:
      return state;
  }
};

export default ListMoodOfEmployee;
