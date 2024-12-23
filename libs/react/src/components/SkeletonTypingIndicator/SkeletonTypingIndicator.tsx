import React from 'react';

interface SkeletonTypingIndicatorProps {
  state: 'loading' | 'hidden';
}

const SkeletonTypingIndicator: React.FC<SkeletonTypingIndicatorProps> = ({ state }) => {
  return (
    <div
      className={`skeleton-typing-indicator ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      <div className="skeleton-dot"></div>
      <div className="skeleton-dot"></div>
      <div className="skeleton-dot"></div>
    </div>
  );
};

export default SkeletonTypingIndicator;