import React from 'react';
import PropTypes from 'prop-types';
import './SuccessMessageNotification.css';

const SuccessMessageNotification = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="success-message-notification">
      <span className="notification-message">{message}</span>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

SuccessMessageNotification.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SuccessMessageNotification;