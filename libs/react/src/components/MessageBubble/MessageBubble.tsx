import React from 'react';

interface MessageBubbleProps {
  message: string;
  status?: 'sent' | 'received' | 'read' | 'unread';
  isSender?: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, status = 'unread', isSender = false }) => {
  const getBubbleClass = () => {
    if (isSender) {
      return 'message-bubble-sender';
    }
    return 'message-bubble-receiver';
  };

  const getStatusClass = () => {
    switch (status) {
      case 'sent':
        return 'message-status-sent';
      case 'received':
        return 'message-status-received';
      case 'read':
        return 'message-status-read';
      default:
        return 'message-status-unread';
    }
  };

  return (
    <div className={`message-bubble ${getBubbleClass()} ${getStatusClass()}`}>
      {message}
    </div>
  );
};

export default MessageBubble;