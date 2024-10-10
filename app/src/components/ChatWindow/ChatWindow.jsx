// ChatWindow.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ChatWindow.css';

const ChatWindow = ({ state }) => {
  return <div className={`chat-window ${state}`}>Chat Content</div>;
};

ChatWindow.propTypes = {
  state: PropTypes.oneOf(['open', 'closed', 'minimized', 'maximized']).isRequired,
};

export default ChatWindow;