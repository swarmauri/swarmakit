import React from 'react';

interface RemoveMemberButtonProps {
  isEnabled: boolean;
  onClick: () => void;
}

const RemoveMemberButton: React.FC<RemoveMemberButtonProps> = ({ isEnabled, onClick }) => {
  return (
    <button
      className={`remove-member-button ${isEnabled ? 'enabled' : 'disabled'}`}
      onClick={onClick}
      disabled={!isEnabled}
      aria-label="Remove member"
    >
      Remove Member
    </button>
  );
};

export default RemoveMemberButton;