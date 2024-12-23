import React, { useState } from 'react';
import './PlayingCard.css';

interface PlayingCardProps {
  suit: string;
  value: string;
  disabled?: boolean;
}

const PlayingCard: React.FC<PlayingCardProps> = ({ suit, value, disabled = false }) => {
  const [isFaceUp, setIsFaceUp] = useState(false);

  const handleFlip = () => {
    if (!disabled) {
      setIsFaceUp(!isFaceUp);
    }
  };

  return (
    <div
      className={`playing-card ${isFaceUp ? 'face-up' : 'face-down'} ${disabled ? 'disabled' : ''}`}
      onClick={handleFlip}
      aria-disabled={disabled}
    >
      <div className="playing-card-inner">
        <div className="playing-card-front">
          <span className="card-value">{value}</span>
          <span className="card-suit">{suit}</span>
        </div>
        <div className="playing-card-back">🂠</div>
      </div>
    </div>
  );
};

export default PlayingCard;