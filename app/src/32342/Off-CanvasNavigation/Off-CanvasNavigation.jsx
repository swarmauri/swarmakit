import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Off-CanvasNavigation.css';

const OffCanvasNavigation = ({ links }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className={`off-canvas-navigation ${visible ? 'visible' : 'hidden'}`}>
      <button className="toggle-button" onClick={toggleVisibility}>
        {visible ? 'Close' : 'Menu'}
      </button>
      <div className={`nav-menu ${visible ? 'visible' : 'hidden'}`}>
        <ul className="nav-links">
          {links.map((link, index) => (
            <li key={index} className="nav-link">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

OffCanvasNavigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OffCanvasNavigation;