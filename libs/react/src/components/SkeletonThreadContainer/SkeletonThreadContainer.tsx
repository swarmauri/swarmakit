import React from 'react';

interface SkeletonThreadContainerProps {
  state: 'loading' | 'hidden';
}

const SkeletonThreadContainer: React.FC<SkeletonThreadContainerProps> = ({ state }) => {
  return (
    <div
      className={`skeleton-thread-container ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      <div className="skeleton-thread"></div>
      <div className="skeleton-thread"></div>
      <div className="skeleton-thread"></div>
    </div>
  );
};

export default SkeletonThreadContainer;