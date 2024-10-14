import React from 'react';
import PropTypes from 'prop-types';
import './GhostButtonOutline.css';

const GhostButtonOutline = ({ label, onClick, disabled, className }) => {
  return (
    <button
      className={`ghost-button-outline ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {label}
    </button>
  );
};

GhostButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

GhostButtonOutline.defaultProps = {
  disabled: false,
  className: '',
};

export default GhostButtonOutline;