import React, { useState } from 'react';
import './FlipCard.css';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  disabled?: boolean;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent, disabled = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (!disabled) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={handleFlip}
      aria-disabled={disabled}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;