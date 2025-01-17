import React from 'react';

interface RangeSliderProps {
  min: number;
  max: number;
  value: number;
  step?: number;
  disabled?: boolean;
  labelPosition?: 'left' | 'center' | 'right';
  onChange: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, value, step = 1, disabled = false, labelPosition = 'left', onChange }) => {
  return (
    <div className={`range-slider label-${labelPosition}`}>
      {labelPosition === 'left' && <span className="slider-label">{value}</span>}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-disabled={disabled}
      />
      {(labelPosition === 'center' || labelPosition === 'right') && <span className="slider-label">{value}</span>}
    </div>
  );
};

export default RangeSlider;