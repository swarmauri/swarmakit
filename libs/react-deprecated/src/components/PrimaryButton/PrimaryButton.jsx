import React from 'react';
import PropTypes from 'prop-types';
import './PrimaryButton.css';

const PrimaryButton = ({ label, onClick, disabled, className }) => {
  return (
    <button
      className={`primary-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {label}
    </button>
  );
};

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

PrimaryButton.defaultProps = {
  disabled: false,
  className: '',
};

export default PrimaryButton;