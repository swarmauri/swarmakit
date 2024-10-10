import React from 'react';
import PropTypes from 'prop-types';
import './BottomNavigationBar.css';

const BottomNavigationBar = ({ items, selectedItem, onItemSelect, disabled }) => {
  return (
    <div className={`bottom-nav ${disabled ? 'disabled' : ''}`}>
      {items.map((item, index) => (
        <button
          key={item}
          className={`nav-item ${selectedItem === index ? 'selected' : ''}`}
          onClick={() => onItemSelect(index)}
          disabled={disabled}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

BottomNavigationBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedItem: PropTypes.number.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

BottomNavigationBar.defaultProps = {
  disabled: false,
};

export default BottomNavigationBar;