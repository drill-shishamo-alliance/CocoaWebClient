import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type DepartmentsAction = ActionType<typeof ActionCreators>;
export default DepartmentsAction;
