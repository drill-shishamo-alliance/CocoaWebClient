import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type CausesAction = ActionType<typeof ActionCreators>;
export default CausesAction;
