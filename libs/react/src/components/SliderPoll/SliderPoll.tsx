import React, { useState } from 'react';
import './SliderPoll.css';

interface SliderPollProps {
  question: string;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  showResults: boolean;
  onValueChange: (value: number) => void;
}

const SliderPoll: React.FC<SliderPollProps> = ({ question, min, max, step, disabled, showResults, onValueChange }) => {
  const [value, setValue] = useState<number>((min + max) / 2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onValueChange(newValue);
  };

  return (
    <div className="slider-poll">
      <h2 className="poll-question">{question}</h2>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        aria-disabled={disabled}
      />
      <div className="slider-value" aria-live="polite">
        {value}
      </div>
      {showResults && <div className="results">You selected: {value}</div>}
    </div>
  );
};

export default SliderPoll;