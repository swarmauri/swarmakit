import React from 'react';

interface SkeletonMessageBubbleProps {
  state: 'loading' | 'hidden';
}

const SkeletonMessageBubble: React.FC<SkeletonMessageBubbleProps> = ({ state }) => {
  return (
    <div
      className={`skeleton-message-bubble ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      <div className="skeleton-bubble"></div>
    </div>
  );
};

export default SkeletonMessageBubble;