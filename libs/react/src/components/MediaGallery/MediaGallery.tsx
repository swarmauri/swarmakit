import React, { useState } from 'react';

interface MediaGalleryProps {
  images: string[];
  initialIndex?: number;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="media-gallery">
      <div className={`image-container ${isExpanded ? 'expanded' : ''} ${isZoomed ? 'zoomed' : ''}`}>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      <div className="controls">
        <button onClick={handlePrevious} aria-label="Previous Image">Previous</button>
        <button onClick={toggleExpand} aria-label={isExpanded ? 'Collapse Image' : 'Expand Image'}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
        <button onClick={toggleZoom} aria-label={isZoomed ? 'Zoom Out' : 'Zoom In'}>
          {isZoomed ? 'Zoom Out' : 'Zoom In'}
        </button>
        <button onClick={handleNext} aria-label="Next Image">Next</button>
      </div>
    </div>
  );
};

export default MediaGallery;