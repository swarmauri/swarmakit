import React from 'react';

interface ThreadPinnedMessageProps {
  state: 'pinned' | 'unpinned' | 'visible' | 'hidden';
  message: string;
}

const ThreadPinnedMessage: React.FC<ThreadPinnedMessageProps> = ({ state, message }) => {
  return (
    <div
      className={`thread-pinned-message ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
    >
      <p>{message}</p>
    </div>
  );
};

export default ThreadPinnedMessage;