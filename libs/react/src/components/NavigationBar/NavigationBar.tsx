import React, { useState } from 'react';

interface NavItem {
  label: string;
  onClick: () => void;
}

interface NavigationBarProps {
  items: NavItem[];
  expanded: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ items, expanded }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navigation-bar">
      <button onClick={handleToggle} aria-expanded={isExpanded} className="nav-toggle">
        Menu
      </button>
      <ul className={`nav-items ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            <button onClick={item.onClick}>{item.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;