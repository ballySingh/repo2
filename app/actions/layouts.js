import * as types from './types';
import Utils from '../lib/utils';

export function getLayouts(id){
    return (dispatch) => {
        dispatch({
            type: types.GET_LAYOUT,
            category: id,
            payload:Utils.getLayoutFromLocalStorage(id) || {}
        });
    };
}

export function removeComponent(id,containerId) {
    return (dispatch) => {
        dispatch({
            type: types.REMOVE_COMPONENT_FROM_LAYOUT,
            category: containerId,
            id:id
        });
    };
}

export function saveLayouts(id, value){
    return () => {
        Utils.saveLayoutToLocalStorage(id, value);
    };
}