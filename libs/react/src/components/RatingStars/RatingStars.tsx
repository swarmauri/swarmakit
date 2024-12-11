import React, { useState } from 'react';

interface RatingStarsProps {
  totalStars?: number;
  selectedStars?: number;
  onRate?: (rating: number) => void;
}

const RatingStars: React.FC<RatingStarsProps> = ({ totalStars = 5, selectedStars = 0, onRate }) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredStar(index);
  const handleMouseLeave = () => setHoveredStar(null);
  const handleClick = (index: number) => onRate && onRate(index + 1);

  return (
    <div className="rating-stars" role="radiogroup" aria-label="Rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          className={`star ${hoveredStar !== null ? (index <= hoveredStar ? 'hover' : '') : (index < selectedStars ? 'selected' : 'inactive')}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          role="radio"
          aria-checked={index < selectedStars}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;