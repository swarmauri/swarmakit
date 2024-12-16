import React from 'react';

interface GroupMemberAvatarProps {
  imageUrl: string;
  status: 'online' | 'offline' | 'active' | 'away' | 'busy';
  altText: string;
}

const GroupMemberAvatar: React.FC<GroupMemberAvatarProps> = ({ imageUrl, status, altText }) => {
  return (
    <div className={`group-member-avatar ${status}`} aria-label={`${altText} is ${status}`}>
      <img src={imageUrl} alt={altText} className="avatar-image" />
      <span className={`status-indicator ${status}`} />
    </div>
  );
};

export default GroupMemberAvatar;