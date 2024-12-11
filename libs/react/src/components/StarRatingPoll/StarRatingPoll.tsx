import React, { useState } from 'react';
import './StarRatingPoll.css';

interface StarRatingPollProps {
  question: string;
  maxStars: number;
  disabled: boolean;
  showResults: boolean;
  onRate: (rating: number) => void;
}

const StarRatingPoll: React.FC<StarRatingPollProps> = ({ question, maxStars, disabled, showResults, onRate }) => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (star: number) => {
    if (!disabled) {
      setRating(star);
      onRate(star);
    }
  };

  return (
    <div className="star-rating-poll">
      <h2 className="poll-question">{question}</h2>
      <div className="star-container" role="radiogroup" aria-disabled={disabled}>
        {[...Array(maxStars)].map((_, index) => (
          <span 
            key={index} 
            className={`star ${rating > index ? 'rated' : ''} ${disabled ? 'disabled' : ''}`} 
            role="radio" 
            aria-checked={rating === index + 1}
            onClick={() => handleStarClick(index + 1)}
          >
            ★
          </span>
        ))}
      </div>
      {showResults && <div className="results">Your rating: {rating} / {maxStars}</div>}
    </div>
  );
};

export default StarRatingPoll;