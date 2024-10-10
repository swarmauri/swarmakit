// MessageBubble.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './MessageBubble.css';

const MessageBubble = ({ message, state }) => {
  return (
    <div className={`message-bubble ${state}`}>
      {message}
    </div>
  );
};

MessageBubble.propTypes = {
  message: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['sent', 'received', 'read', 'unread']).isRequired,
};

export default MessageBubble;