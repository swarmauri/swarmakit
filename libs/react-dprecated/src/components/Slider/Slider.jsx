import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

const Slider = ({ value, onChange, min, max, isDisabled }) => {
  return (
    <input
      type="range"
      className={`slider ${isDisabled ? 'disabled' : ''}`}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      disabled={isDisabled}
    />
  );
};

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  isDisabled: PropTypes.bool,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  isDisabled: false,
};

export default Slider;