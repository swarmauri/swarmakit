import React from 'react';
import PropTypes from 'prop-types';
import './SliderInputRangeSelector.css';

const SliderInputRangeSelector = ({ min, max, value, onChange, step, disabled }) => {
  return (
    <div className={`slider-input-range-selector ${disabled ? 'disabled' : ''}`}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        step={step}
        disabled={disabled}
      />
      <span className="value-display">{value}</span>
    </div>
  );
};

SliderInputRangeSelector.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.number,
  disabled: PropTypes.bool,
};

SliderInputRangeSelector.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
};

export default SliderInputRangeSelector;