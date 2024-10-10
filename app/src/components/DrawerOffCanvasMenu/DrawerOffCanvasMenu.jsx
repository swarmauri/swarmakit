import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DrawerOffCanvasMenu.css';

const DrawerOffCanvasMenu = ({ menuContent, position = 'left', width = '250px' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`drawer-off-canvas-menu ${isOpen ? 'open' : ''} ${position}`} style={{ width }}>
      <button className="toggle-button" onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      <div className="menu-content">{menuContent}</div>
    </div>
  );
};

DrawerOffCanvasMenu.propTypes = {
  menuContent: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['left', 'right']),
  width: PropTypes.string,
};

export default DrawerOffCanvasMenu;