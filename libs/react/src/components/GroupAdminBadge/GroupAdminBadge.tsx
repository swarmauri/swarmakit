import React from 'react';

interface GroupAdminBadgeProps {
  isVisible: boolean;
}

const GroupAdminBadge: React.FC<GroupAdminBadgeProps> = ({ isVisible }) => {
  return (
    <span
      className={`group-admin-badge ${isVisible ? 'visible' : 'hidden'}`}
      aria-hidden={!isVisible}
    >
      Admin
    </span>
  );
};

export default GroupAdminBadge;