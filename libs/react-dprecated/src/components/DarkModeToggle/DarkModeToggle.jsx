import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DarkModeToggle.css';

const DarkModeToggle = ({ initialMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialMode === 'dark');

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleMode}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

DarkModeToggle.propTypes = {
  initialMode: PropTypes.oneOf(['light', 'dark']),
};

DarkModeToggle.defaultProps = {
  initialMode: 'light',
};

export default DarkModeToggle;