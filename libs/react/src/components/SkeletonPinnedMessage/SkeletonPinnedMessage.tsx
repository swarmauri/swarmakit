import React from 'react';

interface SkeletonPinnedMessageProps {
  state: 'loading' | 'hidden';
}

const SkeletonPinnedMessage: React.FC<SkeletonPinnedMessageProps> = ({ state }) => {
  return (
    <div
      className={`skeleton-pinned-message ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      <div className="skeleton-header"></div>
      <div className="skeleton-body"></div>
    </div>
  );
};

export default SkeletonPinnedMessage;