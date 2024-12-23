import React from 'react';
import './CommunityCards.css';

interface CommunityCardProps {
  suit: string;
  value: string;
  isRevealed: boolean;
}

interface CommunityCardsProps {
  cards: CommunityCardProps[];
}

const CommunityCards: React.FC<CommunityCardsProps> = ({ cards }) => {
  return (
    <div className="community-cards">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`community-card ${card.isRevealed ? 'revealed' : 'dealt'}`}
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
            {card.isRevealed && (
              <>
                <text x="10" y="20" className="card-value">{card.value}</text>
                <text x="10" y="40" className="card-suit">{card.suit}</text>
              </>
            )}
          </svg>
        </div>
      ))}
    </div>
  );
};

export default CommunityCards;