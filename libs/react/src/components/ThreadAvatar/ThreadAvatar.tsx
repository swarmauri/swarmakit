import React from 'react';

interface ThreadAvatarProps {
  imageUrl: string;
  status: 'online' | 'offline' | 'active' | 'away' | 'busy';
  altText: string;
}

const ThreadAvatar: React.FC<ThreadAvatarProps> = ({ imageUrl, status, altText }) => {
  return (
    <div className={`avatar-container ${status}`}>
      <img src={imageUrl} alt={altText} className="avatar-image" />
      <span className="status-indicator" aria-label={status}></span>
    </div>
  );
};

export default ThreadAvatar;