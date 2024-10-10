import React from 'react';
import PropTypes from 'prop-types';
import './SecondaryButton.css';

const SecondaryButton = ({ label, onClick, disabled, className }) => {
  return (
    <button
      className={`secondary-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {label}
    </button>
  );
};

SecondaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

SecondaryButton.defaultProps = {
  disabled: false,
  className: '',
};

export default SecondaryButton;