import React from 'react';

interface ThreadUnreadMessageCounterProps {
  count: number;
  visible: boolean;
}

const ThreadUnreadMessageCounter: React.FC<ThreadUnreadMessageCounterProps> = ({ count, visible }) => {
  return (
    <div className={`thread-unread-message-counter ${visible ? 'visible' : 'hidden'}`}>
      {visible && <span aria-label={`Unread messages: ${count}`}>{count}</span>}
    </div>
  );
};

export default ThreadUnreadMessageCounter;