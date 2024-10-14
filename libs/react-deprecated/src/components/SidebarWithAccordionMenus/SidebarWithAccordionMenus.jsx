import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SidebarWithAccordionMenus.css';

const SidebarWithAccordionMenus = ({ menus }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sidebar-with-accordion-menus">
      {menus.map((menu, index) => (
        <div key={index} className={`menu-item ${activeIndex === index ? 'expanded' : 'collapsed'}`}>
          <div className="menu-title" onClick={() => toggleAccordion(index)}>
            {menu.title}
          </div>
          {activeIndex === index && (
            <ul className="submenu">
              {menu.items.map((item, idx) => (
                <li key={idx} className={`submenu-item ${item.disabled ? 'disabled' : ''} ${item.active ? 'active' : ''}`}>
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

SidebarWithAccordionMenus.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          active: PropTypes.bool,
          disabled: PropTypes.bool,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default SidebarWithAccordionMenus;