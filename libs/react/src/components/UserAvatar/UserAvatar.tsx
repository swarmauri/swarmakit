import React from 'react';

interface UserAvatarProps {
  status: 'online' | 'offline' | 'active' | 'away' | 'busy';
  src: string;
  alt: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ status, src, alt }) => {
  return (
    <div className={`user-avatar ${status}`} aria-label={`User status: ${status}`}>
      <img src={src} alt={alt} className="avatar-image" />
      <span className={`status-indicator ${status}`} />
    </div>
  );
};

export default UserAvatar;