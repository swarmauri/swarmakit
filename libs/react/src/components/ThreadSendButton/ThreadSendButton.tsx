import React from 'react';

interface ThreadSendButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const ThreadSendButton: React.FC<ThreadSendButtonProps> = ({ disabled, onClick }) => {
  return (
    <button
      className="send-button"
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label="Send message"
    >
      Send
    </button>
  );
};

export default ThreadSendButton;