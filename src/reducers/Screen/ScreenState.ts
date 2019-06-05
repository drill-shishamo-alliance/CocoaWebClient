import { ScreenState, ScreenType } from 'src/states/ScreenState';
import ScreenAction from 'src/actions/Screen/ScreenAction';
import ScreenActionType from 'src/actions/Screen/ScreenActionType';

export const initialState = {
    screenType: ScreenType.FEELING_TABLE,
}

const screenState = (state: ScreenState = initialState, action: ScreenAction): ScreenState => {
    switch(action.type){
        case ScreenActionType.SWITCH_FEELINGTABLE:
            return{
                ...state,
                screenType: ScreenType.FEELING_TABLE,
            }
        default:
            return state;
    }
}

export default screenState;