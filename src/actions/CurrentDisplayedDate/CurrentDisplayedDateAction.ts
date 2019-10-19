import * as ActionCreators from './CurrentDisplayedDateActionCreator';
import { ActionType } from 'typesafe-actions';

type CurrentDisplayedDateAction = ActionType<typeof ActionCreators>;

export default CurrentDisplayedDateAction;
