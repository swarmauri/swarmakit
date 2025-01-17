import React from 'react';

interface SkeletonAvatarProps {
  state: 'loading' | 'hidden';
}

const SkeletonAvatar: React.FC<SkeletonAvatarProps> = ({ state }) => {
  return (
    <div
      className={`skeleton-avatar ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      <div className="skeleton-circle"></div>
    </div>
  );
};

export default SkeletonAvatar;