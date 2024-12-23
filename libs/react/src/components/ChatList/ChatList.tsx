import React from 'react';

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  selected?: boolean;
}

interface ChatListProps {
  chats: Chat[];
  onSelect: (id: number) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, onSelect }) => {
  return (
    <ul className="chat-list">
      {chats.length === 0 ? (
        <li className="chat-list-empty">No chats available</li>
      ) : (
        chats.map(chat => (
          <li
            key={chat.id}
            className={`chat-item ${chat.selected ? 'selected' : ''}`}
            onClick={() => onSelect(chat.id)}
            role="button"
            tabIndex={0}
            aria-selected={chat.selected}
          >
            <div className="chat-name">{chat.name}</div>
            <div className="chat-last-message">{chat.lastMessage}</div>
          </li>
        ))
      )}
    </ul>
  );
};

export default ChatList;