import React from 'react';

interface AddMemberButtonProps {
  isEnabled: boolean;
  onClick: () => void;
}

const AddMemberButton: React.FC<AddMemberButtonProps> = ({ isEnabled, onClick }) => {
  return (
    <button
      className={`add-member-button ${isEnabled ? 'enabled' : 'disabled'}`}
      onClick={onClick}
      disabled={!isEnabled}
      aria-label="Add member"
    >
      Add Member
    </button>
  );
};

export default AddMemberButton;