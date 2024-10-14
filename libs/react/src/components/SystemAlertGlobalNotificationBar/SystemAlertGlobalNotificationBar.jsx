import React from 'react';
import PropTypes from 'prop-types';
import './SystemAlertGlobalNotificationBar.css';

const SystemAlertGlobalNotificationBar = ({ message, type }) => {
  return (
    <div className={`notification-bar ${type}`}>
      {message}
    </div>
  );
};

SystemAlertGlobalNotificationBar.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
};

SystemAlertGlobalNotificationBar.defaultProps = {
  type: 'info',
};

export default SystemAlertGlobalNotificationBar;