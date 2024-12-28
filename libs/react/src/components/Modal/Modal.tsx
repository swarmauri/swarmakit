import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, disabled = false }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-labelledby="modal-title" aria-modal="true">
      <div className="modal">
        <div className="modal-header">
          <h2 id="modal-title">{title}</h2>
          {!disabled && (
            <button onClick={onClose} className="close-button" aria-label="Close">
              &times;
            </button>
          )}
        </div>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
};

export default Modal;