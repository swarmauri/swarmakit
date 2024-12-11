import React from 'react';

interface ThreadMessageBubbleProps {
  state: 'sent' | 'received' | 'read' | 'unread';
  message: string;
  timestamp: string;
  isSender: boolean;
}

const ThreadMessageBubble: React.FC<ThreadMessageBubbleProps> = ({ state, message, timestamp, isSender }) => {
  return (
    <div
      className={`message-bubble ${state} ${isSender ? 'sender' : 'receiver'}`}
      role="alert"
      aria-live="polite"
    >
      <p>{message}</p>
      <span className="timestamp">{timestamp}</span>
    </div>
  );
};

export default ThreadMessageBubble;