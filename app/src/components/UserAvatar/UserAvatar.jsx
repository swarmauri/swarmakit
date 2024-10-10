import React from 'react';
import PropTypes from 'prop-types';
import './UserAvatar.css';

const UserAvatar = ({ imageUrl, size, altText }) => {
  return (
    <img 
      className={`user-avatar user-avatar--${size}`} 
      src={imageUrl} 
      alt={altText} 
    />
  );
};

UserAvatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  altText: PropTypes.string,
};

UserAvatar.defaultProps = {
  size: 'medium',
  altText: 'User Avatar',
};

export default UserAvatar;