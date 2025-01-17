import React, { useState } from 'react';
import './InteractiveCard.css';

interface InteractiveCardProps {
  title: string;
  content: string;
  draggable?: boolean;
  disabled?: boolean;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ title, content, draggable = false, disabled = false }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setIsSelected(!isSelected);
    }
  };

  return (
    <div
      className={`interactive-card ${isSelected ? 'selected' : 'unselected'} ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      draggable={draggable}
      role="button"
      aria-disabled={disabled}
      aria-selected={isSelected}
    >
      <div className="interactive-card-header">
        <h2 className="interactive-card-title">{title}</h2>
      </div>
      <div className="interactive-card-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default InteractiveCard;