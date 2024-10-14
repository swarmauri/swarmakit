import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = ({ imageSrc, altText, size }) => {
  return (
    <div className={`avatar avatar-${size}`}>
      {imageSrc ? (
        <img src={imageSrc} alt={altText} className="avatar-image" />
      ) : (
        <div className="avatar-placeholder">{altText.charAt(0)}</div>
      )}
    </div>
  );
};

Avatar.propTypes = {
  imageSrc: PropTypes.string,
  altText: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Avatar.defaultProps = {
  size: 'medium',
};

export default Avatar;