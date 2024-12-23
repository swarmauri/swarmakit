import React from 'react';

interface PollOption {
  id: number;
  text: string;
  votes: number;
}

interface InteractivePollResultsProps {
  options: PollOption[];
  totalVotes: number;
  status: 'Live' | 'Completed' | 'Closed';
}

const InteractivePollResults: React.FC<InteractivePollResultsProps> = ({ options, totalVotes, status }) => {
  return (
    <div className="poll-results" aria-label={`Poll status: ${status}`}>
      {options.map((option) => (
        <div key={option.id} className="poll-option">
          <span className="option-text">{option.text}</span>
          <span className="option-votes">{((option.votes / totalVotes) * 100).toFixed(1)}%</span>
          <div className="option-bar-container">
            <div
              className="option-bar"
              style={{ width: `${(option.votes / totalVotes) * 100}%` }}
            />
          </div>
        </div>
      ))}
      <div className="poll-status">Status: {status}</div>
    </div>
  );
};

export default InteractivePollResults;