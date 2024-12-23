import React from 'react';

interface SkeletonSendButtonProps {
  state: 'loading' | 'hidden';
}

const SkeletonSendButton: React.FC<SkeletonSendButtonProps> = ({ state }) => {
  return (
    <div
      className={`skeleton-send-button ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      <div className="skeleton-button"></div>
    </div>
  );
};

export default SkeletonSendButton;