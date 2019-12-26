import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type ListMoodOfDepartmentAction = ActionType<typeof ActionCreators>;
export default ListMoodOfDepartmentAction;
