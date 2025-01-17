import React, { useState } from 'react';
import './SingleChoicePoll.css';

interface OptionProps {
  id: number;
  text: string;
}

interface SingleChoicePollProps {
  question: string;
  options: OptionProps[];
  disabled: boolean;
  showResults: boolean;
  onVote: (optionId: number) => void;
}

const SingleChoicePoll: React.FC<SingleChoicePollProps> = ({ question, options, disabled, showResults, onVote }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionChange = (optionId: number) => {
    if (!disabled) {
      setSelectedOption(optionId);
      onVote(optionId);
    }
  };

  return (
    <div className="single-choice-poll">
      <h2 className="poll-question">{question}</h2>
      <ul className="poll-options">
        {options.map((option) => (
          <li key={option.id} className={`poll-option ${disabled ? 'disabled' : ''}`}>
            <label>
              <input
                type="radio"
                name="poll"
                value={option.id}
                checked={selectedOption === option.id}
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

export default SingleChoicePoll;