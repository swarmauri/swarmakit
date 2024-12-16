import React from 'react';

interface SkeletonNotificationIconProps {
  state: 'loading' | 'hidden';
}

const SkeletonNotificationIcon: React.FC<SkeletonNotificationIconProps> = ({ state }) => {
  return (
    <div
      className={`skeleton-notification-icon ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      <div className="skeleton-icon"></div>
    </div>
  );
};

export default SkeletonNotificationIcon;