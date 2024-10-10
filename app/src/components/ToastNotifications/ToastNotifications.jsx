import React from 'react';
import PropTypes from 'prop-types';
import './ToastNotifications.css';

const ToastNotifications = ({ notifications }) => {
  return (
    <div className="toast-container">
      {notifications.map((notification, index) => (
        <div key={index} className={`toast ${notification.type}`}>
          <span>{notification.message}</span>
        </div>
      ))}
    </div>
  );
};

ToastNotifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'dismissed']),
    })
  ).isRequired,
};

ToastNotifications.defaultProps = {
  notifications: [],
};

export default ToastNotifications;