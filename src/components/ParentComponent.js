import React from 'react';
import { connect } from 'react-redux';
import FilterComponent from './FilterComponent';
import { mapStateToProps } from '../connect/filterConnect';
import { getFilterCount } from '../selectors/filterCountSelectors';

const ParentComponent = ({ filterValue, filterCount }) => {
    const isButtonDisabled = filterValue.trim() === '';

    return (
        <div>
            <FilterComponent />
            <button disabled={isButtonDisabled}>Action Button</button>
            <p>Filter value has been changed {filterCount} times.</p>
        </div>
    );
};

const mapStateToPropsWithCount = (state) => ({
    ...mapStateToProps(state),
    filterCount: getFilterCount(state),
});

export default connect(mapStateToPropsWithCount)(ParentComponent);