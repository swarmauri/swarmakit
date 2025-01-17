import React, { useState } from 'react';

interface CardProps {
  state: 'visible' | 'hidden' | 'hovered' | 'clicked' | 'expanded' | 'collapsed';
  content: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ state, content }) => {
  const [isExpanded, setIsExpanded] = useState(state === 'expanded');

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`card ${state} ${isExpanded ? 'expanded' : 'collapsed'}`}
      role="article"
      aria-hidden={state === 'hidden'}
      onClick={toggleExpansion}
    >
      {state !== 'hidden' && content}
    </div>
  );
};

export default Card;