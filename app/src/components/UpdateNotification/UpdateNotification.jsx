/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import './UpdateNotification.css';

const UpdateNotification = ({ message, isVisible, onClose }) => {
  return (
    isVisible && (
      <div className="update-notification">
        <span>{message}</span>
        <button className="close-button" onClick={onClose} aria-label="Close Notification">
          &times;
        </button>
      </div>
    )
  );
};

UpdateNotification.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

UpdateNotification.defaultProps = {
  isVisible: false
};

export default UpdateNotification;