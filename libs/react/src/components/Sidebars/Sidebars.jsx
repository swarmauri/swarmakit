import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Sidebars.css';

const Sidebars = ({ items }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      <ul className="sidebar-items">
        {items.map((item, index) => (
          <li key={index} className="sidebar-item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebars.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sidebars;