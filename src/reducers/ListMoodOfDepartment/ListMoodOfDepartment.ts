import ListMoodOfDepartmentAction from 'src/actions/ListMoodOfDepartment/Action';
import ListMoodOfDepartmentActionType from 'src/actions/ListMoodOfDepartment/ActionType';
import listMoodOfDepartmentState from 'src/states/ListMoodOfDepartment/ListMoodOfDepartment';

const initialState: listMoodOfDepartmentState = {};

const ListMoodOfDepartment = (
  state: listMoodOfDepartmentState = initialState,
  action: ListMoodOfDepartmentAction
): listMoodOfDepartmentState => {
  switch (action.type) {
    case ListMoodOfDepartmentActionType.GET_LIST_MOOD_OF_DEPARTMENT_SUCCEEDED:
      return { ...action.payload };
    default:
      return state;
  }
};

export default ListMoodOfDepartment;
