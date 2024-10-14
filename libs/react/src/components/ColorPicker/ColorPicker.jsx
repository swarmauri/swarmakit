import React from 'react';
import PropTypes from 'prop-types';
import './ColorPicker.css';

const ColorPicker = ({ selectedColor, disabled, onSelect }) => {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];

  return (
    <div className={`color-picker ${disabled ? 'disabled' : ''}`}>
      {colors.map((color) => (
        <div
          key={color}
          className={`color-box ${selectedColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => !disabled && onSelect(color)}
        />
      ))}
    </div>
  );
};

ColorPicker.propTypes = {
  selectedColor: PropTypes.string,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func,
};

ColorPicker.defaultProps = {
  selectedColor: '',
  disabled: false,
  onSelect: () => {},
};

export default ColorPicker;