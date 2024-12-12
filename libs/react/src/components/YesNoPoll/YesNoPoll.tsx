import React, { useState } from 'react';
import './YesNoPoll.css';

interface YesNoPollProps {
  question: string;
  disabled: boolean;
  showResults: boolean;
  onVote: (vote: 'yes' | 'no') => void;
}

const YesNoPoll: React.FC<YesNoPollProps> = ({ question, disabled, showResults, onVote }) => {
  const [vote, setVote] = useState<'yes' | 'no' | null>(null);

  const handleVoteClick = (selectedVote: 'yes' | 'no') => {
    if (!disabled) {
      setVote(selectedVote);
      onVote(selectedVote);
    }
  };

  return (
    <div className="yesno-poll">
      <h2 className="poll-question">{question}</h2>
      <div className="vote-container" role="radiogroup" aria-disabled={disabled}>
        <button 
          className={`vote-button ${vote === 'yes' ? 'selected' : ''} ${disabled ? 'disabled' : ''}`} 
          role="radio" 
          aria-checked={vote === 'yes'}
          onClick={() => handleVoteClick('yes')}
        >
          Yes
        </button>
        <button 
          className={`vote-button ${vote === 'no' ? 'selected' : ''} ${disabled ? 'disabled' : ''}`} 
          role="radio" 
          aria-checked={vote === 'no'}
          onClick={() => handleVoteClick('no')}
        >
          No
        </button>
      </div>
      {showResults && vote && <div className="results">You voted: {vote === 'yes' ? 'Yes' : 'No'}</div>}
    </div>
  );
};

export default YesNoPoll;