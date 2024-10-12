import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NavigationBar.css';

const NavigationBar = ({ links }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={`navigation-bar ${expanded ? 'expanded' : 'collapsed'}`}>
      <button className="toggle-button" onClick={toggleExpanded}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      <ul className={`nav-links ${expanded ? 'expanded' : 'collapsed'}`}>
        {links.map((link, index) => (
          <li key={index} className="nav-link">
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavigationBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavigationBar;