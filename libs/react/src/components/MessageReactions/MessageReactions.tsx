import React from 'react';

interface MessageReactionsProps {
  state: 'available' | 'unavailable' | 'hovered' | 'clicked';
}

const MessageReactions: React.FC<MessageReactionsProps> = ({ state }) => {
  return (
    <div 
      className={`message-reactions ${state}`} 
      aria-hidden={state === 'unavailable'} 
      aria-label={`Reactions are ${state}`}>
      {state === 'available' && <span>😀 😍 😢</span>}
      {state === 'hovered' && <span>👍 👎 ❤️</span>}
      {state === 'clicked' && <span>❤️</span>}
    </div>
  );
};

export default MessageReactions;