import * as types from '../actions/types'; 
import createReducer from '../lib/createReducer';

export const messages = createReducer({}, {
    [types.GET_MESSAGES](state, action){
        let newState = {};
        action.messages.forEach((message)  =>{
            newState[message.id] = message;
        });
        return newState;
    }
});

export const messages_loading = createReducer(false, {
    [types.MESSAGES_LOADING](state, action){
        return action.loading;
    }
});

export const message = createReducer({}, {
    [types.GET_MESSAGE](state, action){
        let newState = {};
        newState = action.message;
        return newState;
    }
});

export const message_loading = createReducer(false, {
    [types.MESSAGE_LOADING](state, action){
        console.log('NEW state:     ********** '+ action.loading);
        return action.loading;
    }
});

