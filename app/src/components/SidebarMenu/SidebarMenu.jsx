import React from 'react';
import PropTypes from 'prop-types';
import './SidebarMenu.css';

const SidebarMenu = ({ items, onItemSelect, isOpen }) => {
  return (
    <div className={`sidebar-menu ${isOpen ? 'open' : 'closed'}`}>
      <ul className="menu-items">
        {items.map((item, index) => (
          <li key={index} onClick={() => onItemSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

SidebarMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onItemSelect: PropTypes.func,
  isOpen: PropTypes.bool,
};

SidebarMenu.defaultProps = {
  onItemSelect: () => {},
  isOpen: false,
};

export default SidebarMenu;