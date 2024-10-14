import React from 'react';
import PropTypes from 'prop-types';
import './AlertBox.css';

const AlertBox = ({ type, message, onClose }) => {
  return (
    <div className={`alert-box ${type}`}>
      <span className="alert-message">{message}</span>
      <button className="alert-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

AlertBox.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AlertBox;