import React from 'react';
import PropTypes from 'prop-types';
import './UserBadgeStatusRole.css';

const UserBadgeStatusRole = ({ status, role, size }) => {
  return (
    <div className={`user-badge user-badge--${size} user-badge--${status}`}>
      <span className="user-badge__role">{role}</span>
      <span className={`user-badge__status user-badge__status--${status}`}>{status}</span>
    </div>
  );
};

UserBadgeStatusRole.propTypes = {
  status: PropTypes.oneOf(['online', 'offline', 'busy']),
  role: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

UserBadgeStatusRole.defaultProps = {
  status: 'offline',
  size: 'medium',
};

export default UserBadgeStatusRole;