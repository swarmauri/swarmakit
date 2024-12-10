import React from 'react';

interface SkeletonUnreadMessageCounterProps {
  state: 'loading' | 'hidden';
}

const SkeletonUnreadMessageCounter: React.FC<SkeletonUnreadMessageCounterProps> = ({ state }) => {
  return (
    <div
      className={`skeleton-unread-message-counter ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      <div className="skeleton-counter"></div>
    </div>
  );
};

export default SkeletonUnreadMessageCounter;