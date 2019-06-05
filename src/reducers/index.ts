import { combineReducers } from 'redux';
import screenState from './Screen/ScreenState';

const rootReducer = combineReducers({
    screenState,
})

export default rootReducer;