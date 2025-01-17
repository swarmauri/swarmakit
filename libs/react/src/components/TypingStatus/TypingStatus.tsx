import React from 'react';

interface TypingStatusProps {
  state: 'visible' | 'hidden' | 'typing' | 'paused';
}

const TypingStatus: React.FC<TypingStatusProps> = ({ state }) => {
  return (
    <div 
      className={`typing-status ${state}`} 
      aria-hidden={state === 'hidden'} 
      aria-label={`Typing status is ${state}`}>
      {state === 'typing' && <span>Typing...</span>}
      {state === 'paused' && <span>Paused</span>}
    </div>
  );
};

export default TypingStatus;