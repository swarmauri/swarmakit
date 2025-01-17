import React, { useState } from 'react';

interface NumberInputWithIncrementProps {
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

const NumberInputWithIncrement: React.FC<NumberInputWithIncrementProps> = ({
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
}) => {
  const [value, setValue] = useState<number>(min);

  const handleIncrement = () => {
    if (!disabled && value < max) {
      setValue((prevValue) => Math.min(prevValue + step, max));
    }
  };

  const handleDecrement = () => {
    if (!disabled && value > min) {
      setValue((prevValue) => Math.max(prevValue - step, min));
    }
  };

  return (
    <div className="number-input" aria-disabled={disabled}>
      <button onClick={handleDecrement} disabled={disabled || value <= min} aria-label="Decrement">
        -
      </button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        readOnly
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        disabled={disabled}
      />
      <button onClick={handleIncrement} disabled={disabled || value >= max} aria-label="Increment">
        +
      </button>
    </div>
  );
};

export default NumberInputWithIncrement;