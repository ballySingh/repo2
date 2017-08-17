import * as types from './types';
import Api from '../lib/api';


export function getMessages(){
    return (dispatch) => {

        dispatch({
            type: types.MESSAGES_LOADING,
            loading:true
        });

        return Api.get('/mobile/messages').then(resp => {
            dispatch({
                type: types.GET_MESSAGES,
                messages: resp.messages
            });

            dispatch({
                type: types.MESSAGES_LOADING,
                loading:false
            });

        }).catch(ex => {
            dispatch({
                type: types.MESSAGE_ERROR,
                payload:ex
            });

            dispatch({
                type: types.MESSAGES_LOADING,
                loading:false
            });
        });
    };
}

export function getMessage( params ){
    return (dispatch) => {

        dispatch({
            type: types.MESSAGE_LOADING,
            loading:true
        });

        return Api.post('/mobile/message', params).then(resp => {
            dispatch({
                type: types.GET_MESSAGE,
                message: resp.message
            });

            dispatch({
                type: types.MESSAGE_LOADING,
                loading:false
            });

        }).catch(ex => {
            dispatch({
                type: types.MESSAGE_ERROR,
                payload:ex
            });

            dispatch({
                type: types.MESSAGE_LOADING,
                loading:false
            });
        });
    };
}
