import React from 'react';
import PropTypes from 'prop-types';
import './ThumbnailCardWithImage.css';

const ThumbnailCardWithImage = ({ imageUrl, title, description, onClick }) => {
  return (
    <div className="thumbnail-card" onClick={onClick}>
      <img src={imageUrl} alt={title} className="thumbnail-card-image" />
      <div className="thumbnail-card-content">
        <h3 className="thumbnail-card-title">{title}</h3>
        <p className="thumbnail-card-description">{description}</p>
      </div>
    </div>
  );
};

ThumbnailCardWithImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

ThumbnailCardWithImage.defaultProps = {
  description: '',
  onClick: () => {},
};

export default ThumbnailCardWithImage;