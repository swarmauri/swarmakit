import React from 'react';
import './DeckOfCards.css';

interface CardProps {
  id: number;
  suit: string;
  value: string;
}

interface DeckOfCardsProps {
  cards: CardProps[];
  onShuffle: () => void;
  onDraw: (id: number) => void;
}

const DeckOfCards: React.FC<DeckOfCardsProps> = ({ cards, onShuffle, onDraw }) => {
  return (
    <div className="deck-container">
      <button onClick={onShuffle} className="shuffle-button">Shuffle</button>
      <div className="deck-of-cards">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="card-stack"
            style={{ zIndex: cards.length - index }}
            onClick={() => onDraw(card.id)}
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

export default DeckOfCards;