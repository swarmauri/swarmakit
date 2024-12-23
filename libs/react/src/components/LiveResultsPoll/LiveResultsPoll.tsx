import React, { useState, useEffect } from 'react';
import './LiveResultsPoll.css';

interface PollOption {
  id: number;
  label: string;
  votes: number;
}

interface LiveResultsPollProps {
  question: string;
  options: PollOption[];
  liveResults: boolean;
  closed: boolean;
  onVote: (selectedId: number) => void;
}

const LiveResultsPoll: React.FC<LiveResultsPollProps> = ({ question, options, liveResults, closed, onVote }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedId !== null) {
      onVote(selectedId);
    }
  }, [selectedId, onVote]);

  const handleVote = (id: number) => {
    if (!closed) {
      setSelectedId(id);
    }
  };

  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="live-results-poll">
      <h2 className="poll-question">{question}</h2>
      <div className="options-container">
        {options.map(option => (
          <button
            key={option.id}
            className={`poll-option ${selectedId === option.id ? 'selected' : ''}`}
            onClick={() => handleVote(option.id)}
            disabled={closed}
            aria-disabled={closed}
            aria-pressed={selectedId === option.id}
          >
            <span className="option-label">{option.label}</span>
            {liveResults && (
              <span className="option-votes">
                {option.votes} vote{option.votes !== 1 ? 's' : ''} ({((option.votes / totalVotes) * 100).toFixed(1)}%)
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LiveResultsPoll;