import { ActionType } from 'typesafe-actions';
import * as ScreenActionCreator from './ScreenActionCreator';

type ScreenAction = ActionType<typeof ScreenActionCreator>;
export default ScreenAction;