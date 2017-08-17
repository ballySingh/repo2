import * as MessageActions from './messages';
import * as DepartureBoardActions from './departureBoards';
import * as CSL2Actions from './csl2';
import * as LayoutActions from './layouts';
import {bindActionCreators} from 'redux';

export const ActionCreators = Object.assign({},
    MessageActions,DepartureBoardActions, CSL2Actions,LayoutActions
);



export const dispatchFucntion = function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
};
