import React from 'react';

interface SidebarProps {
  state: 'visible' | 'hidden' | 'collapsed' | 'expanded' | 'hovered';
  menuItems: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ state, menuItems }) => {
  if (state === 'hidden') {
    return null;
  }

  return (
    <aside className={`sidebar ${state}`} role="complementary" aria-label="Sidebar Navigation">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;