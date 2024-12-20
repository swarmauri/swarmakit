import React, { useState } from 'react';

interface MenuItem {
  label: string;
  onClick: () => void;
}

interface DropdownMenuProps {
  items: MenuItem[];
  expanded: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, expanded }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="dropdown-menu">
      <button onClick={handleToggle} aria-expanded={isExpanded} className="dropdown-toggle">
        Menu
      </button>
      <ul className={`menu-list ${isExpanded ? 'expanded' : 'collapsed'}`} role="menu">
        {items.map((item, index) => (
          <li key={index} className="menu-item" role="menuitem">
            <button onClick={item.onClick}>{item.label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;