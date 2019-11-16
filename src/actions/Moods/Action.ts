import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type MoodsAction = ActionType<typeof ActionCreators>;
export default MoodsAction;
