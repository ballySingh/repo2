import * as types from './types';
import Api from '../lib/api';

export function getCSL2(){
    return (dispatch) => {
        return Api.get('/desktop/csl2Data').then(resp => {
            dispatch({
                type: types.GET_CSL2DATA,
                csl2: resp.data
            });
        }).catch(ex => {
            dispatch({
                type: types.CSL2_ERROR,
                payload:ex
            });
        });
    };
}
