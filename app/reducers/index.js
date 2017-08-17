import { combineReducers } from 'redux';
import * as MessageReducer from './messages';
import  * as DepartureBoardReducer from './departureBoards';
import  * as CSL2Reducer from './csl2';
import  * as LayoutReducer from './layouts';

export default combineReducers(Object.assign(
    MessageReducer, DepartureBoardReducer, CSL2Reducer,LayoutReducer
));