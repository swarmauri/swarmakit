// ChatList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ChatList.css';

const ChatList = ({ chats, selectedChatId }) => {
  return (
    <div className="chat-list">
      {chats.length === 0 ? (
        <div className="empty-message">No chats available</div>
      ) : (
        chats.map(chat => (
          <div
            key={chat.id}
            className={`chat-item ${chat.id === selectedChatId ? 'selected' : ''}`}
          >
            {chat.name}
          </div>
        ))
      )}
    </div>
  );
};

ChatList.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedChatId: PropTypes.string,
};

export default ChatList;