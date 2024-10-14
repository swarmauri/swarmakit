import React from 'react';
import PropTypes from 'prop-types';
import './StarRatingIcon.css';

const StarRatingIcon = ({ rating, maxRating, onRate }) => {
  const stars = Array.from({ length: maxRating }, (_, index) => (
    <span
      key={index}
      className={`star ${index < rating ? 'filled' : 'empty'}`}
      onClick={() => onRate(index + 1)}
    >
      ★
    </span>
  ));

  return <div className="star-rating-icon-container">{stars}</div>;
};

StarRatingIcon.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
  onRate: PropTypes.func.isRequired,
};

StarRatingIcon.defaultProps = {
  maxRating: 5,
};

export default StarRatingIcon;