import * as types from '../actions/types';

import createReducer from '../lib/createReducer';

export const layouts = createReducer({}, {
    [types.GET_LAYOUT](state, action){
        let newState = {...state};
        newState[action.category] = action.payload;
        return newState;
    },
    [types.REMOVE_COMPONENT_FROM_LAYOUT](state, action){
        let newState = {...state};

        let subState = newState[action.category];
         Object.keys(subState).map(function(key) {
             let filter = subState[key].filter((obj) => {
                 return obj.i != action.id;
             });
             newState[action.category][key] = filter;
        }, this);
        return newState;
    }
});

