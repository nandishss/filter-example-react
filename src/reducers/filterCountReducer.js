import { FILTERS_ACTIONS } from '../actions/actionTypes';

const initialState = {
    filterCount: 0,
};

const filterCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTERS_ACTIONS.FILTER_VALUE_CHANGE:
            return { ...state, filterCount: state.filterCount + 1 };
        default:
            return state;
    }
};

export default filterCountReducer;