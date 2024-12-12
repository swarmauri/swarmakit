import React, { useState } from 'react';

interface MenuItem {
  id: number;
  label: string;
  content: string;
}

interface CollapsibleMenuListProps {
  items: MenuItem[];
}

const CollapsibleMenuList: React.FC<CollapsibleMenuListProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <ul className="collapsible-menu-list">
      {items.map((item) => (
        <li key={item.id} className={`menu-item ${activeItem === item.id ? 'active' : ''}`}>
          <div
            className="menu-label"
            onClick={() => toggleItem(item.id)}
            onKeyPress={() => toggleItem(item.id)}
            role="button"
            tabIndex={0}
            aria-expanded={activeItem === item.id}
          >
            {item.label}
          </div>
          {activeItem === item.id && <div className="menu-content">{item.content}</div>}
        </li>
      ))}
    </ul>
  );
};

export default CollapsibleMenuList;