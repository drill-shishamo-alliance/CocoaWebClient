import * as ActionCreators from './DisplayDateActionCreator';
import { ActionType } from 'typesafe-actions';

type DisplayDateAction = ActionType<typeof ActionCreators>;

export default DisplayDateAction;
