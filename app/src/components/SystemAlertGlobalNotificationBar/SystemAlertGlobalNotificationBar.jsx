import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AlertBar = styled.div`
  padding: 1rem;
  color: white;
  text-align: center;
  background-color: ${({ alertType }) => {
    switch (alertType) {
      case 'success':
        return '#4caf50';
      case 'error':
        return '#f44336';
      case 'warning':
        return '#ff9800';
      case 'info':
        return '#2196f3';
      default:
        return '#2196f3';
    }
  }};
  transition: background-color 0.3s;
`;

const SystemAlertGlobalNotificationBar = ({ message, type }) => {
  return <AlertBar alertType={type}>{message}</AlertBar>;
};

SystemAlertGlobalNotificationBar.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
};

SystemAlertGlobalNotificationBar.defaultProps = {
  type: 'info',
};

export default SystemAlertGlobalNotificationBar;