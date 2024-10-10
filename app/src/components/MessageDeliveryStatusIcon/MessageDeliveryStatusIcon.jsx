// MessageDeliveryStatusIcon.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './MessageDeliveryStatusIcon.css';

const MessageDeliveryStatusIcon = ({ status }) => {
  let icon;
  switch (status) {
    case 'sent':
      icon = '📤';
      break;
    case 'delivered':
      icon = '📬';
      break;
    case 'failed':
      icon = '❌';
      break;
    case 'read':
      icon = '📖';
      break;
    default:
      icon = '❓';
  }

  return (
    <span className={`status-icon ${status}`}>
      {icon}
    </span>
  );
};

MessageDeliveryStatusIcon.propTypes = {
  status: PropTypes.oneOf(['sent', 'delivered', 'failed', 'read']).isRequired,
};

export default MessageDeliveryStatusIcon;