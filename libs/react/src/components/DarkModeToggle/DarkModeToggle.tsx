import React, { useState } from 'react';

interface DarkModeToggleProps {
  onToggle: (isDarkMode: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    onToggle(!isDarkMode);
  };

  return (
    <button
      onClick={handleToggle}
      aria-pressed={isDarkMode}
      className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;