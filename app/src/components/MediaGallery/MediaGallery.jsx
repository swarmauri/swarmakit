import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MediaGallery.css';

const MediaGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.2);
  };

  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 0.2 > 0 ? zoomLevel - 0.2 : zoomLevel);
  };

  return (
    <div className="media-gallery">
      <div className={`gallery-image ${isExpanded ? 'expanded' : ''}`}>
        <img 
          src={images[currentImage]} 
          alt={`Image ${currentImage + 1}`} 
          style={{ transform: `scale(${zoomLevel})` }} 
        />
      </div>
      <div className="gallery-controls">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={toggleExpand}>{isExpanded ? 'Collapse' : 'Expand'}</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </div>
  );
};

MediaGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MediaGallery;