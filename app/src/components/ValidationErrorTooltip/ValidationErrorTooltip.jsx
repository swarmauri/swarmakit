import React from 'react';
import PropTypes from 'prop-types';
import './ValidationErrorTooltip.css';

const ValidationErrorTooltip = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="validation-error-tooltip">
      <span className="tooltip-text">{message}</span>
    </div>
  );
};

ValidationErrorTooltip.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ValidationErrorTooltip;