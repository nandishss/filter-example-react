import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../connect/filterConnect';

const FilterComponent = ({ filterValue, filterValueChange }) => {
    const handleChange = (event) => {
        filterValueChange(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={filterValue}
                onChange={handleChange}
                placeholder="Filter items"
            />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);