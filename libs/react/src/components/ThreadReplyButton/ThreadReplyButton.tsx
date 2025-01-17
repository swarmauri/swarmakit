import React from 'react';

interface ThreadReplyButtonProps {
  disabled: boolean;
  label: string;
  onClick: () => void;
}

const ThreadReplyButton: React.FC<ThreadReplyButtonProps> = ({ disabled, label, onClick }) => {
  return (
    <button
      className="reply-button"
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ThreadReplyButton;