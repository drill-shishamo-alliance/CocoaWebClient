import * as ActionCreators from './displayDateActionCreator';
import { ActionType } from 'typesafe-actions';

type DisplayDateAction = ActionType<typeof ActionCreators>;

export default DisplayDateAction;
