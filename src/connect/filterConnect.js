import { getFilterValue } from '../selectors/filtersSelectors';
import { filterValueChange } from '../actions/filtersActions';

export const mapStateToProps = (state) => ({
    filterValue: getFilterValue(state),
});

export const mapDispatchToProps = {
    filterValueChange,
};