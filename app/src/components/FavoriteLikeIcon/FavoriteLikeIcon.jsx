import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteLikeIcon.css';

const FavoriteLikeIcon = ({ isFavorite, onClick }) => (
  <div className="favorite-like-icon-container" onClick={onClick}>
    {isFavorite ? '❤️' : '🤍'}
  </div>
);

FavoriteLikeIcon.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FavoriteLikeIcon;