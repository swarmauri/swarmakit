// ImageAnnotator.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ImageAnnotator.css';

const ImageAnnotator = ({ imageUrl, altText, annotations }) => {
  return (
    <div className="image-annotator">
      <img src={imageUrl} alt={altText} className="annotator-image" />
      {annotations.map((annotation, index) => (
        <div
          key={index}
          className="annotation"
          style={{ top: annotation.y, left: annotation.x }}
        >
          {annotation.text}
        </div>
      ))}
    </div>
  );
};

ImageAnnotator.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  annotations: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageAnnotator;