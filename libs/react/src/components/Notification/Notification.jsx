import React from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({ type, message, onDismiss }) => {
  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button className="notification-dismiss" onClick={onDismiss}>
        &times;
      </button>
    </div>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func,
};

Notification.defaultProps = {
  onDismiss: () => {},
};

export default Notification;