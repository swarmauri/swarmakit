import React from 'react';

interface SkeletonMessageInputBoxProps {
  state: 'loading' | 'hidden';
}

const SkeletonMessageInputBox: React.FC<SkeletonMessageInputBoxProps> = ({ state }) => {
  return (
    <div
      className={`skeleton-message-input-box ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      <div className="skeleton-input"></div>
    </div>
  );
};

export default SkeletonMessageInputBox;