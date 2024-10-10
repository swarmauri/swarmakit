/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import './SystemStatusNotificationEGApiDowntime.css';

const SystemStatusNotificationEGApiDowntime = ({ message, isVisible, onClose }) => {
  return (
    isVisible && (
      <div className="system-status-notification">
        <span>{message}</span>
        <button className="close-button" onClick={onClose} aria-label="Close Notification">
          &times;
        </button>
      </div>
    )
  );
};

SystemStatusNotificationEGApiDowntime.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

SystemStatusNotificationEGApiDowntime.defaultProps = {
  isVisible: false
};

export default SystemStatusNotificationEGApiDowntime;