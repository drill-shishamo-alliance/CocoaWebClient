import * as MoodsActionCreators from './MoodsActionCreator';
import { ActionType } from 'typesafe-actions';

type MoodsAction = ActionType<typeof MoodsActionCreators>;
export default MoodsAction;
