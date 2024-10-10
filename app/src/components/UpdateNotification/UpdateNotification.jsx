import React from 'react';
import PropTypes from 'prop-types';
import './UpdateNotification.css';

const UpdateNotification = ({ message, isVisible, onDismiss }) => {
  if (!isVisible) return null;

  return (
    <div className="update-notification">
      <span className="notification-message">{message}</span>
      <button className="dismiss-button" onClick={onDismiss}>Dismiss</button>
    </div>
  );
};

UpdateNotification.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default UpdateNotification;