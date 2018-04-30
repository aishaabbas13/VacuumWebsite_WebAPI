import constants from '../constants/actionTypes'

var initialState = {
    transactions: [],
    selectedTransaction: null
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch(action.type) {
        case constants.FETCH_TRANSACTIONS:
            updated['transactions'] = action.transactions;
            updated['selectedTransaction'] = action.transactions[0];
            return updated;
        case constants.SET_TRANSACTION:
            updated['selectedTransaction'] = action.selectedTransaction;
            return updated;
        case constants.FETCH_TRANSACTION:
            updated['selectedTransaction'] = action.selectedTransaction;
            return updated;
        default:
            return state;
    }
}