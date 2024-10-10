import React from 'react';
import PropTypes from 'prop-types';
import './ComponentRatingCard.css';

const ComponentRatingCard = ({ title, rating, maxRating, description }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="component-rating-card">
      <h3 className="rating-card-title">{title}</h3>
      <div className="rating-stars">{renderStars()}</div>
      <p className="rating-card-description">{description}</p>
    </div>
  );
};

ComponentRatingCard.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  description: PropTypes.string,
};

ComponentRatingCard.defaultProps = {
  rating: 0,
  maxRating: 5,
  description: '',
};

export default ComponentRatingCard;