import * as EmployeeMoodsActionCreators from './EmployeeMoodsActionCreator';
import { ActionType } from 'typesafe-actions';

type EmployeeMoodsAction = ActionType<typeof EmployeeMoodsActionCreators>;
export default EmployeeMoodsAction;
