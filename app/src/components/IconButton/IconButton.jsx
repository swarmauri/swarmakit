import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({ icon, disabled, onClick }) => {
  return (
    <button
      className="icon-button"
      disabled={disabled}
      onClick={onClick}
    >
      <span className="icon">{icon}</span>
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default IconButton;