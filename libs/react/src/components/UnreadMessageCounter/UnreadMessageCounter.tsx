import React from 'react';

interface UnreadMessageCounterProps {
  count: number;
  hidden?: boolean;
}

const UnreadMessageCounter: React.FC<UnreadMessageCounterProps> = ({ count, hidden = false }) => {
  if (hidden || count <= 0) {
    return null;
  }

  return (
    <div className="unread-message-counter" aria-label={`You have ${count} unread messages`}>
      {count}
    </div>
  );
};

export default UnreadMessageCounter;