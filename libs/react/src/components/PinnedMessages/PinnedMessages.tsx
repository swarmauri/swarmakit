import React from 'react';

interface PinnedMessagesProps {
  state: 'pinned' | 'unpinned' | 'visible' | 'hidden';
  messageContent: string;
  onPinToggle: () => void;
}

const PinnedMessages: React.FC<PinnedMessagesProps> = ({ state, messageContent, onPinToggle }) => {
  const isHidden = state === 'hidden';

  return (
    <div
      className={`pinned-message ${state}`}
      role="listitem"
      aria-hidden={isHidden}
      aria-label={state === 'pinned' ? 'Pinned message' : 'Unpinned message'}
    >
      <p>{messageContent}</p>
      <button onClick={onPinToggle} aria-pressed={state === 'pinned'}>
        {state === 'pinned' ? 'Unpin' : 'Pin'}
      </button>
    </div>
  );
};

export default PinnedMessages;