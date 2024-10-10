import React from 'react';
import PropTypes from 'prop-types';
import './ModalNotification.css';

const ModalNotification = ({ title, message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-notification">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

ModalNotification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalNotification;