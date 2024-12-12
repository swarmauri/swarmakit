import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  value: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, value, disabled = false, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(Number(event.target.value));
    }
  };

  return (
    <input
      type="range"
      className="slider"
      min={min}
      max={max}
      value={value}
      disabled={disabled}
      onChange={handleChange}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-disabled={disabled}
    />
  );
};

export default Slider;