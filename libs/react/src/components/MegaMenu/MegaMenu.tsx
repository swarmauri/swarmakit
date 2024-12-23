import React, { useState } from 'react';

interface MegaMenuItem {
  label: string;
  onClick: () => void;
  subItems?: MegaMenuItem[];
}

interface MegaMenuProps {
  items: MegaMenuItem[];
  expanded: boolean;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ items, expanded }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mega-menu">
      <button onClick={handleToggle} aria-expanded={isExpanded} className="mega-menu-toggle">
        Mega Menu
      </button>
      <div className={`menu-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <button onClick={item.onClick}>{item.label}</button>
            {item.subItems && (
              <div className="sub-menu">
                {item.subItems.map((subItem, subIndex) => (
                  <button key={subIndex} onClick={subItem.onClick}>
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;