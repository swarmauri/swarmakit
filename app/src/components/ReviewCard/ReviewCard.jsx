import React from 'react';
import PropTypes from 'prop-types';
import './ReviewCard.css';

const ReviewCard = ({ avatarUrl, reviewerName, reviewText, rating, date }) => {
  return (
    <div className="review-card">
      <div className="reviewer-info">
        <img src={avatarUrl} alt={`${reviewerName}'s avatar`} className="avatar" />
        <div>
          <span className="reviewer-name">{reviewerName}</span>
          <span className="review-date">{date}</span>
        </div>
      </div>
      <div className="review-content">
        <div className="review-rating">Rating: {rating}/5</div>
        <p className="review-text">{reviewText}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  reviewerName: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReviewCard;