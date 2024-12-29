import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  additionalInfo: string;
  status?: 'online' | 'offline' | 'busy';
}

const ProfileCard: React.FC<ProfileCardProps> = ({ avatarUrl, name, additionalInfo, status }) => {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <img src={avatarUrl} alt={`${name}'s avatar`} className="profile-card-avatar" />
        {status && <span className={`profile-card-status profile-card-status-${status}`}></span>}
      </div>
      <div className="profile-card-content">
        <div className="profile-card-name">{name}</div>
        <div className="profile-card-additional-info">{additionalInfo}</div>
      </div>
    </div>
  );
};

export default ProfileCard;