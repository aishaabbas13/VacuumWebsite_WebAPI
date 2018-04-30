import constants from '../constants/actionTypes'

var initialState = {
    charities: [],
    selectedCharitie: null
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch(action.type) {
        case constants.FETCH_CHARITIES:
            updated['charities'] = action.charities;
            updated['selectedCharitie'] = action.charities[0];
            return updated;
        case constants.SET_CHARITY:
            updated['selectedCharitie'] = action.selectedCharitie;
            return updated;
        case constants.FETCH_CHARITY:
            updated['selectedCharitie'] = action.selectedCharitie;
            return updated;
        default:
            return state;
    }
}