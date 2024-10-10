// GroupMemberAvatar.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './GroupMemberAvatar.css';

const GroupMemberAvatar = ({ imageUrl, status }) => {
  return (
    <div className={`group-member-avatar ${status}`}>
      <img src={imageUrl} alt="Avatar" className="avatar-image" />
      <span className={`status-indicator ${status}`}></span>
    </div>
  );
};

GroupMemberAvatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['online', 'offline', 'active', 'away', 'busy']).isRequired,
};

export default GroupMemberAvatar;