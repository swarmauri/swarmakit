import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({ icon, onClick, disabled, label }) => {
  return (
    <button
      className="icon-button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      <span className="icon-button__icon">{icon}</span>
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

IconButton.defaultProps = {
  disabled: false,
};

export default IconButton;