/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import './UserBadgeStatusRole.css';

const UserBadgeStatusRole = ({ username, status, role }) => {
  return (
    <div className="user-badge">
      <span className="user-badge__username">{username}</span>
      <span className={`user-badge__status user-badge__status--${status.toLowerCase()}`}>{status}</span>
      <span className="user-badge__role">{role}</span>
    </div>
  );
};

UserBadgeStatusRole.propTypes = {
  username: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Online', 'Offline', 'Busy', 'Away']).isRequired,
  role: PropTypes.oneOf(['Admin', 'Moderator', 'User']).isRequired,
};

export default UserBadgeStatusRole;