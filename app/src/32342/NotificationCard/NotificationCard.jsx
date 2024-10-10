import React from 'react';
import PropTypes from 'prop-types';
import './NotificationCard.css';

const NotificationCard = ({ type, message, onClose }) => {
  return (
    <div className={`notification-card ${type}`}>
      <span className="notification-message">{message}</span>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

NotificationCard.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotificationCard;