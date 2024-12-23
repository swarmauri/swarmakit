import React, { useState } from 'react';
import './StackedCard.css';

interface CardProps {
  title: string;
  content: string;
  selected?: boolean;
}

interface StackedCardProps {
  cards: CardProps[];
  layout: 'vertical' | 'horizontal';
  spacing?: string;
}

const StackedCard: React.FC<StackedCardProps> = ({ cards, layout, spacing = '16px' }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  return (
    <div className={`stacked-card-container ${layout}`} style={{ gap: spacing }}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`stacked-card ${selectedCardIndex === index ? 'selected' : ''}`}
          onClick={() => handleCardClick(index)}
          role="button"
          aria-selected={selectedCardIndex === index}
        >
          <div className="stacked-card-header">
            <h2 className="stacked-card-title">{card.title}</h2>
          </div>
          <div className="stacked-card-content">
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackedCard;