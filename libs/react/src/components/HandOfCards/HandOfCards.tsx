import React from 'react';
import './HandOfCards.css';

interface CardProps {
  id: number;
  suit: string;
  value: string;
  selected: boolean;
}

interface HandOfCardsProps {
  cards: CardProps[];
  onSelect: (id: number) => void;
  maxCards: number;
}

const HandOfCards: React.FC<HandOfCardsProps> = ({ cards, onSelect, maxCards }) => {
  return (
    <div className="hand-container">
      {cards.length >= maxCards && (
        <div className="limit-notification">Max limit reached</div>
      )}
      <div className="hand-of-cards">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.selected ? 'selected' : 'unselected'}`}
            onClick={() => onSelect(card.id)}
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
    </div>
  );
};

export default HandOfCards;