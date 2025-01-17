import React, { useState } from 'react';
import './ThumbsUpThumbsDownPoll.css';

interface ThumbsUpThumbsDownPollProps {
  question: string;
  disabled: boolean;
  showResults: boolean;
  onReact: (reaction: 'up' | 'down') => void;
}

const ThumbsUpThumbsDownPoll: React.FC<ThumbsUpThumbsDownPollProps> = ({ question, disabled, showResults, onReact }) => {
  const [reaction, setReaction] = useState<'up' | 'down' | null>(null);

  const handleReactionClick = (selectedReaction: 'up' | 'down') => {
    if (!disabled) {
      setReaction(selectedReaction);
      onReact(selectedReaction);
    }
  };

  return (
    <div className="thumbs-poll">
      <h2 className="poll-question">{question}</h2>
      <div className="thumb-container" role="radiogroup" aria-disabled={disabled}>
        <span 
          className={`thumb thumb-up ${reaction === 'up' ? 'selected' : ''} ${disabled ? 'disabled' : ''}`} 
          role="radio" 
          aria-checked={reaction === 'up'}
          onClick={() => handleReactionClick('up')}
        >
          👍
        </span>
        <span 
          className={`thumb thumb-down ${reaction === 'down' ? 'selected' : ''} ${disabled ? 'disabled' : ''}`} 
          role="radio" 
          aria-checked={reaction === 'down'}
          onClick={() => handleReactionClick('down')}
        >
          👎
        </span>
      </div>
      {showResults && reaction && <div className="results">You reacted: {reaction === 'up' ? 'Thumbs Up' : 'Thumbs Down'}</div>}
    </div>
  );
};

export default ThumbsUpThumbsDownPoll;