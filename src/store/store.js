import { createStore } from 'redux';
import filtersReducer from './../reducers/filtersReducer';

const store = createStore(filtersReducer);

export default store;