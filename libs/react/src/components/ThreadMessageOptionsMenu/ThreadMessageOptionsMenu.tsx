import React, { useState } from 'react';

interface ThreadMessageOptionsMenuProps {
  options: string[];
}

const ThreadMessageOptionsMenu: React.FC<ThreadMessageOptionsMenuProps> = ({ options }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className="options-menu-container">
      <button
        onClick={toggleMenu}
        aria-expanded={visible}
        aria-haspopup="true"
        className="options-button"
      >
        Options
      </button>
      {visible && (
        <ul className="options-menu" role="menu">
          {options.map((option, index) => (
            <li key={index} role="menuitem" className="option-item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThreadMessageOptionsMenu;