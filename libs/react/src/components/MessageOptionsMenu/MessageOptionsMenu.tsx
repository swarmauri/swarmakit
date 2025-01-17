import React from 'react';

interface MessageOptionsMenuProps {
  state: 'visible' | 'hidden' | 'clicked';
}

const MessageOptionsMenu: React.FC<MessageOptionsMenuProps> = ({ state }) => {
  return (
    <div 
      className={`message-options-menu ${state}`} 
      aria-hidden={state === 'hidden'} 
      aria-label={`Options menu is ${state}`}>
      {state === 'visible' && (
        <ul>
          <li>Edit</li>
          <li>Delete</li>
          <li>Reply</li>
        </ul>
      )}
      {state === 'clicked' && (
        <div>Option clicked</div>
      )}
    </div>
  );
};

export default MessageOptionsMenu;