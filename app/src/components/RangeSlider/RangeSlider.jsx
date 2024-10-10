import React from 'react';
import PropTypes from 'prop-types';
import './RangeSlider.css';

const RangeSlider = ({ min, max, value, onChange, disabled }) => {
  return (
    <div className="range-slider-container">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="range-slider-input"
      />
    </div>
  );
};

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  value: 50,
  onChange: () => {},
  disabled: false,
};

export default RangeSlider;