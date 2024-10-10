/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import './UserAvatar.css';

const UserAvatar = ({ src, alt, size }) => {
  return (
    <div className={`user-avatar user-avatar--${size}`}>
      <img src={src} alt={alt} className="user-avatar__image" />
    </div>
  );
};

UserAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

UserAvatar.defaultProps = {
  size: 'medium',
};

export default UserAvatar;