import React from 'react';
import PropTypes from 'prop-types';
import './GhostButtonOutline.css';

const GhostButtonOutline = ({ label, onClick, disabled }) => {
  return (
    <button
      className="ghost-button-outline"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

GhostButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

GhostButtonOutline.defaultProps = {
  disabled: false,
};

export default GhostButtonOutline;