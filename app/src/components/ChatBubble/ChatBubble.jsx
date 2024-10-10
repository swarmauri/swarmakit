import React from 'react';
import PropTypes from 'prop-types';
import './ChatBubble.css';

const ChatBubble = ({ message, status, isActive }) => {
  return (
    <div className={`chat-bubble ${status} ${isActive ? 'active' : ''}`}>
      <p>{message}</p>
    </div>
  );
};

ChatBubble.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['read', 'unread']),
  isActive: PropTypes.bool,
};

ChatBubble.defaultProps = {
  status: 'unread',
  isActive: false,
};

export default ChatBubble;