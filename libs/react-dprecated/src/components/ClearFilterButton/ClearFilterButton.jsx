import React from 'react';
import PropTypes from 'prop-types';
import './ClearFilterButton.css';

const ClearFilterButton = ({ onClick, disabled }) => {
  return (
    <button
      className="clear-filter-button"
      onClick={onClick}
      disabled={disabled}
    >
      Clear Filters
    </button>
  );
};

ClearFilterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

ClearFilterButton.defaultProps = {
  disabled: false,
};

export default ClearFilterButton;