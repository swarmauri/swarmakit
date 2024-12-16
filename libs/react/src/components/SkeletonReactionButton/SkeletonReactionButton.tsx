import React from 'react';

interface SkeletonReactionButtonProps {
  state: 'loading' | 'hidden';
}

const SkeletonReactionButton: React.FC<SkeletonReactionButtonProps> = ({ state }) => {
  return (
    <div
      className={`skeleton-reaction-button ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      <div className="skeleton-button"></div>
    </div>
  );
};

export default SkeletonReactionButton;