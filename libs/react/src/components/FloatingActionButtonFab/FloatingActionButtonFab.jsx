import React from 'react';
import PropTypes from 'prop-types';
import './FloatingActionButtonFab.css';

const FloatingActionButtonFab = ({ icon, onClick, disabled, label }) => {
  return (
    <button
      className="fab"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      <span className="fab__icon">{icon}</span>
    </button>
  );
};

FloatingActionButtonFab.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

FloatingActionButtonFab.defaultProps = {
  disabled: false,
};

export default FloatingActionButtonFab;