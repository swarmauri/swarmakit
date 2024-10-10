/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import './SuccessMessageNotification.css';

const SuccessMessageNotification = ({ message, isVisible, onClose }) => {
  return (
    isVisible && (
      <div className="success-message-notification">
        <span>{message}</span>
        <button className="close-button" onClick={onClose} aria-label="Close Notification">
          &times;
        </button>
      </div>
    )
  );
};

SuccessMessageNotification.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

SuccessMessageNotification.defaultProps = {
  isVisible: false
};

export default SuccessMessageNotification;