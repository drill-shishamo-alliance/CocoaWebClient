import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type EmployeesAction = ActionType<typeof ActionCreators>;
export default EmployeesAction;
