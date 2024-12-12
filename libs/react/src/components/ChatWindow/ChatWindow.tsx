import React from 'react';

interface ChatWindowProps {
  state: 'open' | 'closed' | 'minimized' | 'maximized';
}

const ChatWindow: React.FC<ChatWindowProps> = ({ state }) => {
  return (
    <div className={`chat-window ${state}`} role="region" aria-label={`Chat window is ${state}`}>
      <div className="chat-content">
        {/* Chat content goes here */}
      </div>
    </div>
  );
};

export default ChatWindow;