import * as JuniorFeellingsActionCreators from './JuniorFeelingsActionCreator';
import { ActionType } from 'typesafe-actions';

type JuniorFeelingsAction = ActionType<typeof JuniorFeellingsActionCreators>;
export default JuniorFeelingsAction;
