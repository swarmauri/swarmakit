import React, { useState } from 'react';
import './RankingPoll.css';

interface OptionProps {
  id: number;
  text: string;
}

interface RankingPollProps {
  question: string;
  options: OptionProps[];
  disabled: boolean;
  showResults: boolean;
  onRank: (rankedOptions: number[]) => void;
}

const RankingPoll: React.FC<RankingPollProps> = ({ question, options, disabled, showResults, onRank }) => {
  const [rankedOptions, setRankedOptions] = useState<number[]>([]);

  const handleRankChange = (optionId: number, position: number) => {
    if (!disabled) {
      const newRankedOptions = [...rankedOptions];
      newRankedOptions[position] = optionId;
      setRankedOptions(newRankedOptions);
      onRank(newRankedOptions);
    }
  };

  return (
    <div className="ranking-poll">
      <h2 className="poll-question">{question}</h2>
      <ul className="poll-options">
        {options.map((option, index) => (
          <li key={option.id} className={`poll-option ${disabled ? 'disabled' : ''}`}>
            <label>
              {index + 1}.
              <select
                value={rankedOptions.indexOf(option.id) !== -1 ? rankedOptions.indexOf(option.id) : ''}
                onChange={(e) => handleRankChange(option.id, parseInt(e.target.value))}
                disabled={disabled}
                aria-disabled={disabled}
              >
                <option value="" disabled>Select position...</option>
                {options.map((_, i) => (
                  <option key={i} value={i}>{i + 1}</option>
                ))}
              </select>
              {option.text}
            </label>
            {showResults && <span className="results-bar" style={{ width: `${Math.random() * 100}%` }} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankingPoll;