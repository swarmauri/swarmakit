import React, { useState } from 'react';

interface NavItem {
  label: string;
  onClick: () => void;
}

interface OffCanvasNavigationProps {
  items: NavItem[];
  isVisible: boolean;
}

const OffCanvasNavigation: React.FC<OffCanvasNavigationProps> = ({ items, isVisible }) => {
  const [visible, setVisible] = useState(isVisible);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className={`off-canvas-navigation ${visible ? 'visible' : 'hidden'}`}>
      <button onClick={handleToggle} aria-expanded={visible} className="nav-toggle">
        Toggle Menu
      </button>
      <ul className="nav-items">
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            <button onClick={item.onClick}>{item.label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OffCanvasNavigation;