import React, { useState } from 'react';

interface MenuItem {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

interface AccordionMenu {
  title: string;
  items: MenuItem[];
}

interface SidebarWithAccordionMenusProps {
  menus: AccordionMenu[];
}

const SidebarWithAccordionMenus: React.FC<SidebarWithAccordionMenusProps> = ({ menus }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleMenuClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <aside className="sidebar-with-accordion-menus" aria-label="Sidebar with Accordion Menus">
      {menus.map((menu, index) => (
        <div key={index} className="accordion-menu">
          <button
            className="accordion-title"
            onClick={() => handleMenuClick(index)}
            aria-expanded={expandedIndex === index}
          >
            {menu.title}
          </button>
          {expandedIndex === index && (
            <ul className="menu-items">
              {menu.items.map((item, itemIndex) => (
                <li key={itemIndex} className={`menu-item ${item.disabled ? 'disabled' : ''}`}>
                  <button onClick={item.onClick} disabled={item.disabled}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
};

export default SidebarWithAccordionMenus;