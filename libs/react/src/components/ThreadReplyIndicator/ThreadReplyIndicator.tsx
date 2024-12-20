import React, { useState } from 'react';

interface ThreadReplyIndicatorProps {
  visible: boolean;
}

const ThreadReplyIndicator: React.FC<ThreadReplyIndicatorProps> = ({ visible }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`thread-reply-indicator ${visible ? 'visible' : 'hidden'} ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
      aria-hidden={!visible}
      role="button"
    >
      <span>Reply</span>
    </div>
  );
};

export default ThreadReplyIndicator;