import * as types from '../actions/types';
import createReducer from '../lib/createReducer';

export const boards = createReducer({}, {
    [types.GET_BOARDS](state, action){
        let newState = {};
        action.boards.forEach((board)  =>{
            newState[board.rid] = board;
        });
        return newState;
    }
});
