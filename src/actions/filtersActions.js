import { FILTERS_ACTIONS } from './actionTypes';

export const filterValueChange = (value) => ({
    type: FILTERS_ACTIONS.FILTER_VALUE_CHANGE,
    payload: value,
});