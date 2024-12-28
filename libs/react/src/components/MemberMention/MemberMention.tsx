import React from 'react';

interface MemberMentionProps {
  state: 'visible' | 'hidden' | 'clicked';
  memberName: string;
  onClick: () => void;
}

const MemberMention: React.FC<MemberMentionProps> = ({ state, memberName, onClick }) => {
  const isHidden = state === 'hidden';

  return (
    <span
      className={`member-mention ${state}`}
      onClick={onClick}
      role="button"
      aria-hidden={isHidden}
      aria-pressed={state === 'clicked'}
    >
      @{memberName}
    </span>
  );
};

export default MemberMention;