import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RatingStars.css';

const RatingStars = ({ totalStars, initialRating, state }) => {
  const [rating, setRating] = useState(initialRating);

  const handleMouseOver = (index) => {
    if (state !== 'inactive') {
      setRating(index + 1);
    }
  };

  const handleClick = (index) => {
    if (state !== 'inactive') {
      setRating(index + 1);
    }
  };

  return (
    <div className={`rating-stars ${state}`}>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : ''}`}
          onMouseOver={() => handleMouseOver(index)}
          onClick={() => handleClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

RatingStars.propTypes = {
  totalStars: PropTypes.number,
  initialRating: PropTypes.number,
  state: PropTypes.oneOf(['hover', 'selected', 'inactive']),
};

RatingStars.defaultProps = {
  totalStars: 5,
  initialRating: 0,
  state: 'inactive',
};

export default RatingStars;