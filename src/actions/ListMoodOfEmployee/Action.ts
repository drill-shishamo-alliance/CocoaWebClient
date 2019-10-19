import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type ListMoodOfEmployeeAction = ActionType<typeof ActionCreators>;
export default ListMoodOfEmployeeAction;
