import React from 'react';

interface ThreadReactionButtonProps {
  label: string;
  available: boolean;
  onClick: () => void;
}

const ThreadReactionButton: React.FC<ThreadReactionButtonProps> = ({ label, available, onClick }) => {
  return (
    <button
      className="thread-reaction-button"
      aria-disabled={!available}
      onClick={available ? onClick : undefined}
    >
      {label}
    </button>
  );
};

export default ThreadReactionButton;