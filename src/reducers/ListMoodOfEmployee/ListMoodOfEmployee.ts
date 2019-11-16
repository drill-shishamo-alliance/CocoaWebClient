import ListMoodOfEmployeeAction from 'src/actions/ListMoodOfEmployee/Action';
import ListMoodOfEmployeeActionType from 'src/actions/ListMoodOfEmployee/ActionType';
import { getListMoodOfEmployeeResponse } from 'src/apis/ListMoodOfEmployee/GetListMoodOfEmployee';

// const initialState: ListMoodOfEmployeeState = {};
const initialState: getListMoodOfEmployeeResponse = {};

const ListMoodOfEmployee = (
  state: getListMoodOfEmployeeResponse = initialState,
  action: ListMoodOfEmployeeAction
): getListMoodOfEmployeeResponse => {
  switch (action.type) {
    case ListMoodOfEmployeeActionType.GET_LIST_MOOD_OF_EMPLOYEE_SUCCEEDED:
      return { ...action.payload };
    default:
      return state;
  }
};

export default ListMoodOfEmployee;
