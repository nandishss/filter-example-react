import { combineReducers } from 'redux';
import filtersReducer from './filtersReducer';
import filterCountReducer from './filterCountReducer';

const rootReducer = combineReducers({
    filters: filtersReducer,
    filterCount: filterCountReducer,
});

export default rootReducer;