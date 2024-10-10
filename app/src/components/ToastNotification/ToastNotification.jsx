import React from 'react';
import PropTypes from 'prop-types';
import './ToastNotification.css';

const ToastNotification = ({ message, type, onClose }) => {
  return (
    <div className={`toast-notification ${type}`}>
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

ToastNotification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  onClose: PropTypes.func.isRequired,
};

ToastNotification.defaultProps = {
  type: 'info',
};

export default ToastNotification;