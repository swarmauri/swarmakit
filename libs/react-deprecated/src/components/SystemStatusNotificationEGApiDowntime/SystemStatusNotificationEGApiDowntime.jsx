import React from 'react';
import PropTypes from 'prop-types';
import './SystemStatusNotificationEGApiDowntime.css';

const SystemStatusNotificationEGApiDowntime = ({ message, isVisible, onAcknowledge }) => {
  if (!isVisible) return null;

  return (
    <div className="system-status-notification">
      <span className="notification-message">{message}</span>
      <button className="acknowledge-button" onClick={onAcknowledge}>Acknowledge</button>
    </div>
  );
};

SystemStatusNotificationEGApiDowntime.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onAcknowledge: PropTypes.func.isRequired,
};

export default SystemStatusNotificationEGApiDowntime;