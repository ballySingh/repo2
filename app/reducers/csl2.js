import * as types from '../actions/types';
import createReducer from '../lib/createReducer';

export const csl2 = createReducer({}, {
    [types.GET_CSL2DATA](state, action){
        let newState = {};
        action.csl2.forEach((csl)  =>{
            newState[csl.tocName] = csl;
        });
        return newState;
    }
});