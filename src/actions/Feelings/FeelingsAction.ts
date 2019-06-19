import * as FeellingsActionCreators from './FeelingsActionCreator';
import { ActionType } from 'typesafe-actions';

type FeelingsAction = ActionType<typeof FeellingsActionCreators>;
export default FeelingsAction;
