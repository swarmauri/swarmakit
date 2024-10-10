// UserAvatar.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './UserAvatar.css';

const UserAvatar = ({ status, imageUrl, onClick }) => {
  return (
    <div className={`user-avatar ${status}`} onClick={onClick}>
      <img src={imageUrl} alt="User Avatar" />
    </div>
  );
};

UserAvatar.propTypes = {
  status: PropTypes.oneOf(['online', 'offline', 'active', 'away', 'busy']).isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default UserAvatar;