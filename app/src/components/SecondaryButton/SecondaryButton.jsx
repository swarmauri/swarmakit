import React from 'react';
import PropTypes from 'prop-types';
import './SecondaryButton.css';

const SecondaryButton = ({ label, onClick, disabled }) => {
  return (
    <button
      className="secondary-button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

SecondaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

SecondaryButton.defaultProps = {
  disabled: false,
};

export default SecondaryButton;