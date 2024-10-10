import React from 'react';
import PropTypes from 'prop-types';
import './ContextMenu.css';

const ContextMenu = ({ isVisible, items, onSelect }) => {
  return (
    <div className={`context-menu ${isVisible ? 'visible' : ''}`}>
      {items.map((item, index) => (
        <button
          key={index}
          className="context-menu-item"
          onClick={() => onSelect(item)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

ContextMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ContextMenu;