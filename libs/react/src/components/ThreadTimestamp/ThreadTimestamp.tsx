import React from 'react';

interface ThreadTimestampProps {
  timestamp: string;
  visible: boolean;
}

const ThreadTimestamp: React.FC<ThreadTimestampProps> = ({ timestamp, visible }) => {
  return (
    <span
      className="thread-timestamp"
      aria-hidden={!visible}
    >
      {visible ? timestamp : ''}
    </span>
  );
};

export default ThreadTimestamp;