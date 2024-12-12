import React from 'react';

interface ThreadScrollButtonProps {
  label: string;
  visible: boolean;
  onClick: () => void;
}

const ThreadScrollButton: React.FC<ThreadScrollButtonProps> = ({ label, visible, onClick }) => {
  return (
    <button
      className={`thread-scroll-button ${visible ? 'visible' : 'hidden'}`}
      aria-hidden={!visible}
      onClick={visible ? onClick : undefined}
    >
      {label}
    </button>
  );
};

export default ThreadScrollButton;