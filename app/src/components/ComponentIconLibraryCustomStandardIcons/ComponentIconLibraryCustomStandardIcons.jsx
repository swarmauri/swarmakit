import React from 'react';
import PropTypes from 'prop-types';
import './ComponentIconLibraryCustomStandardIcons.css';

const ComponentIconLibraryCustomStandardIcons = ({ iconType, size, color }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'home':
        return <span className="icon home-icon">🏠</span>;
      case 'settings':
        return <span className="icon settings-icon">⚙️</span>;
      case 'user':
        return <span className="icon user-icon">👤</span>;
      case 'search':
        return <span className="icon search-icon">🔍</span>;
      default:
        return <span className="icon default-icon">❓</span>;
    }
  };
  
  return (
    <div className={`icon-container ${size}`} style={{ color: color }}>
      {renderIcon()}
    </div>
  );
};

ComponentIconLibraryCustomStandardIcons.propTypes = {
  iconType: PropTypes.oneOf(['home', 'settings', 'user', 'search']).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

ComponentIconLibraryCustomStandardIcons.defaultProps = {
  size: 'medium',
  color: '#000',
};

export default ComponentIconLibraryCustomStandardIcons;