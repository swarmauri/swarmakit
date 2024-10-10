import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropdownMenu.css';

const DropdownMenu = ({ items }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleDropdown = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Menu
      </button>
      {isExpanded && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} className="dropdown-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DropdownMenu;