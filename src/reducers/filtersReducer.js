import { FILTERS_ACTIONS } from '../actions/actionTypes';

const initialState = {
    filterValue: '',
};

const filtersReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case FILTERS_ACTIONS.FILTER_VALUE_CHANGE:
            return { ...state, filterValue: action.payload };
        default:
            return state;
    }
};

export default filtersReducer;