import React from 'react';

interface TypingIndicatorProps {
  isVisible?: boolean;
  isTyping?: boolean;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ isVisible = false, isTyping = false }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={`typing-indicator ${isTyping ? 'typing' : ''}`}>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
};

export default TypingIndicator;