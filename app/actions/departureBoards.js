import * as types from './types';
import Api from '../lib/api';

export function getDepartureBoards(params) {

    return (dispatch) => {
        return Api.post('/desktop/deptBoards?method=getStaffDepartureBoards', params).then(resp => {
            dispatch(getBoards({boards: resp.deptData}));
        }).catch(ex => {
            dispatch({
                type: types.DEPARTURE_BOARD_ERROR,
                payload:ex
            });
        });
    };

}

export function getBoards(boards) {

    return {
        type: types.GET_BOARDS,
        boards: boards.boards
    } ;
}
