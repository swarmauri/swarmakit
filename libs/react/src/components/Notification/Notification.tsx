import React from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  onDismiss: () => void;
  dismissed?: boolean;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onDismiss, dismissed = false }) => {
  if (dismissed) return null;

  return (
    <div className={`notification ${type}`} role="alert">
      <span>{message}</span>
      <button onClick={onDismiss} className="dismiss-button" aria-label="Dismiss notification">
        &times;
      </button>
    </div>
  );
};

export default Notification;