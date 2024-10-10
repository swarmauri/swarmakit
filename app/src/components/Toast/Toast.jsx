import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToastWrapper = styled.div`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  min-width: 250px;
  margin: 0 auto;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  transition: visibility 0.3s, opacity 0.3s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const Toast = ({ message, visible, autoHideDuration, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    if (visible && autoHideDuration) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onDismiss) onDismiss();
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [visible, autoHideDuration, onDismiss]);

  return <ToastWrapper visible={isVisible}>{message}</ToastWrapper>;
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  autoHideDuration: PropTypes.number,
  onDismiss: PropTypes.func,
};

Toast.defaultProps = {
  visible: false,
  autoHideDuration: 3000,
  onDismiss: null,
};

export default Toast;