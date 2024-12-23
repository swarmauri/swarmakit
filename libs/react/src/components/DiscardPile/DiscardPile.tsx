import React from 'react';
import './DiscardPile.css';

interface CardProps {
  id: number;
  suit: string;
  value: string;
}

interface DiscardPileProps {
  cards: CardProps[];
  maxCards: number;
  isHovered: boolean;
  onCardDrop: () => void;
}

const DiscardPile: React.FC<DiscardPileProps> = ({ cards, maxCards, isHovered, onCardDrop }) => {
  return (
    <div
      className={`discard-pile ${isHovered ? 'hovered' : ''}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onCardDrop}
    >
      {cards.length === 0 && <div className="empty-cue">Pile is empty</div>}
      {cards.length > 0 && (
        <div className="cards-stack">
          {cards.map((card, index) => (
            <div 
              key={card.id} 
              className="card"
              style={{ top: `-${index * 2}px`, left: `-${index * 2}px` }}
            >
              <svg viewBox="0 0 100 140" className="card-svg">
                <rect
                  x="5"
                  y="5"
                  width="90"
                  height="130"
                  rx="10"
                  ry="10"
                  className="card-border"
                />
                <text x="10" y="20" className="card-value">{card.value}</text>
                <text x="10" y="40" className="card-suit">{card.suit}</text>
              </svg>
            </div>
          ))}
        </div>
      )}
      {cards.length >= maxCards && <div className="full-cue">Pile is full</div>}
    </div>
  );
};

export default DiscardPile;