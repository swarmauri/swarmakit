import React from 'react';
import PropTypes from 'prop-types';
import './FullScreenModal.css';

const FullScreenModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fullscreen-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

FullScreenModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FullScreenModal;