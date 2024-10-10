/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import './ValidationErrorTooltip.css';

const ValidationErrorTooltip = ({ message, isVisible }) => {
  return (
    isVisible && (
      <div className="validation-error-tooltip">
        {message}
      </div>
    )
  );
};

ValidationErrorTooltip.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool
};

ValidationErrorTooltip.defaultProps = {
  isVisible: false
};

export default ValidationErrorTooltip;