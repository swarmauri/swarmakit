import React from 'react';

interface SkeletonGroupMemberListProps {
  state: 'loading' | 'hidden';
}

const SkeletonGroupMemberList: React.FC<SkeletonGroupMemberListProps> = ({ state }) => {
  const members = Array.from({ length: 5 });

  return (
    <div
      className={`skeleton-group-member-list ${state}`}
      aria-hidden={state === 'hidden'}
      role="status"
      aria-live={state === 'loading' ? 'polite' : 'off'}
    >
      {members.map((_, index) => (
        <div key={index} className="skeleton-member"></div>
      ))}
    </div>
  );
};

export default SkeletonGroupMemberList;