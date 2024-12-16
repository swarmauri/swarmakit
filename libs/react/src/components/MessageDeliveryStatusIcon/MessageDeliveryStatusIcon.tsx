import React from 'react';

interface MessageDeliveryStatusIconProps {
  status: 'sent' | 'delivered' | 'failed' | 'read';
}

const MessageDeliveryStatusIcon: React.FC<MessageDeliveryStatusIconProps> = ({ status }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'sent':
        return '📤';
      case 'delivered':
        return '📬';
      case 'failed':
        return '❌';
      case 'read':
        return '📖';
      default:
        return '';
    }
  };

  return (
    <span className={`status-icon ${status}`} role="img" aria-label={`Message status is ${status}`}>
      {getStatusIcon()}
    </span>
  );
};

export default MessageDeliveryStatusIcon;