import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 4px;
  background-color: ${({ type }) => {
    switch (type) {
      case 'success':
        return '#d4edda';
      case 'error':
        return '#f8d7da';
      case 'warning':
        return '#fff3cd';
      case 'info':
        return '#d1ecf1';
      default:
        return '#f8f9fa';
    }
  }};
  color: ${({ type }) => {
    switch (type) {
      case 'success':
        return '#155724';
      case 'error':
        return '#721c24';
      case 'warning':
        return '#856404';
      case 'info':
        return '#0c5460';
      default:
        return '#383d41';
    }
  }};
  transition: opacity 0.3s;
  opacity: ${({ dismissed }) => (dismissed ? 0 : 1)};
`;

const CloseButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: inherit;
`;

const ToastNotifications = ({ message, type, dismissed, onClose }) => {
  return (
    <ToastContainer type={type} dismissed={dismissed}>
      {message}
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </ToastContainer>
  );
};

ToastNotifications.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  dismissed: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

ToastNotifications.defaultProps = {
  dismissed: false,
};

export default ToastNotifications;