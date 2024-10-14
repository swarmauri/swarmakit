// ImageViewer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ImageViewer.css';

const ImageViewer = ({ imageUrl, altText }) => {
  return (
    <div className="image-viewer">
      <img src={imageUrl} alt={altText} className="image" />
    </div>
  );
};

ImageViewer.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default ImageViewer;