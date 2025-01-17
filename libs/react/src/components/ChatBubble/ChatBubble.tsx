import React from 'react';

interface ChatBubbleProps {
  text: string;
  status?: 'read' | 'unread';
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, status = 'unread' }) => {
  return (
    <div className={`chat-bubble ${status}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatBubble;