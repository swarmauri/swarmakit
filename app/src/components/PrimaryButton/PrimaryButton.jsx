import React from 'react';
import PropTypes from 'prop-types';
import './PrimaryButton.css';

const PrimaryButton = ({ label, onClick, disabled }) => {
  return (
    <button
      className="primary-button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  disabled: false,
};

export default PrimaryButton;