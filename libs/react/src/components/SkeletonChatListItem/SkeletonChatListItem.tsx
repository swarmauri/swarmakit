import React from 'react';

interface SkeletonChatListItemProps {
  state: 'loading' | 'hidden';
}

const SkeletonChatListItem: React.FC<SkeletonChatListItemProps> = ({ state }) => {
  return (
    <div
      className={`skeleton-chat-list-item ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      <div className="skeleton-avatar"></div>
      <div className="skeleton-text"></div>
    </div>
  );
};

export default SkeletonChatListItem;