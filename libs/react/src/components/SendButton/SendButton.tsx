import React from 'react';

interface SendButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

const SendButton: React.FC<SendButtonProps> = ({ disabled = false, onClick }) => {
  return (
    <button
      className={`send-button ${disabled ? 'disabled' : 'enabled'}`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Send message"
    >
      Send
    </button>
  );
};

export default SendButton;