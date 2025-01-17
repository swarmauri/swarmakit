import React from 'react';

interface SystemAlertGlobalNotificationBarProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

const SystemAlertGlobalNotificationBar: React.FC<SystemAlertGlobalNotificationBarProps> = ({ message, type }) => {
  return (
    <div className={`notification-bar ${type}`} role="alert" aria-live="assertive">
      {message}
    </div>
  );
};

export default SystemAlertGlobalNotificationBar;