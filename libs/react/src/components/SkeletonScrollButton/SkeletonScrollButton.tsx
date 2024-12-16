import React from 'react';

interface SkeletonScrollButtonProps {
  state: 'loading' | 'hidden';
}

const SkeletonScrollButton: React.FC<SkeletonScrollButtonProps> = ({ state }) => {
  return (
    <div
      className={`skeleton-scroll-button ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      <div className="skeleton-circle"></div>
    </div>
  );
};

export default SkeletonScrollButton;