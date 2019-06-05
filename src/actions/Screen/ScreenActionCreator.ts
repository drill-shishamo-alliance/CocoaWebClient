import { createStandardAction } from 'typesafe-actions';
import ScreenActionType from './ScreenActionType';

export const switchFeelingTable = createStandardAction(
    ScreenActionType.SWITCH_FEELINGTABLE
)();