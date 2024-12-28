import React, { useState } from 'react';
import './MultipleChoicePoll.css';

interface OptionProps {
  id: number;
  text: string;
}

interface MultipleChoicePollProps {
  question: string;
  options: OptionProps[];
  disabled: boolean;
  showResults: boolean;
  onVote: (selectedOptions: number[]) => void;
}

const MultipleChoicePoll: React.FC<MultipleChoicePollProps> = ({ question, options, disabled, showResults, onVote }) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const handleOptionChange = (optionId: number) => {
    if (!disabled) {
      const newSelectedOptions = selectedOptions.includes(optionId)
        ? selectedOptions.filter((id) => id !== optionId)
        : [...selectedOptions, optionId];
      setSelectedOptions(newSelectedOptions);
      onVote(newSelectedOptions);
    }
  };

  return (
    <div className="multiple-choice-poll">
      <h2 className="poll-question">{question}</h2>
      <ul className="poll-options">
        {options.map((option) => (
          <li key={option.id} className={`poll-option ${disabled ? 'disabled' : ''}`}>
            <label>
              <input
                type="checkbox"
                name="poll"
                value={option.id}
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleOptionChange(option.id)}
                disabled={disabled}
                aria-disabled={disabled}
              />
              {option.text}
            </label>
            {showResults && <span className="results-bar" style={{ width: `${Math.random() * 100}%` }} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultipleChoicePoll;