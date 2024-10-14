import React from 'react';
import PropTypes from 'prop-types';
import './PushNotificationBanner.css';

const PushNotificationBanner = ({ message, type, onClose }) => {
  return (
    <div className={`push-notification-banner ${type}`}>
      <p>{message}</p>
      <button className="notification-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

PushNotificationBanner.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  onClose: PropTypes.func.isRequired,
};

PushNotificationBanner.defaultProps = {
  type: 'info',
};

export default PushNotificationBanner;