import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './360-DegreeImageViewer.css';

const DegreeImageViewer = ({ images, autoRotate, zoom }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(autoRotate);
  const viewerRef = useRef(null);

  useEffect(() => {
    let rotationInterval;
    if (isRotating) {
      rotationInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 100);
    }
    return () => {
      if (rotationInterval) clearInterval(rotationInterval);
    };
  }, [isRotating, images.length]);

  const toggleRotation = () => setIsRotating(!isRotating);

  const handleZoom = (direction) => {
    if (viewerRef.current) {
      const scale = direction === 'in' ? 1.1 : 0.9;
      viewerRef.current.style.transform = `scale(${scale})`;
    }
  };

  return (
    <div className="image-viewer-container">
      <img
        ref={viewerRef}
        src={images[currentIndex]}
        alt={`View ${currentIndex}`}
        className="image-viewer"
      />
      <div className="controls">
        <button onClick={toggleRotation}>{isRotating ? 'Pause' : 'Rotate'}</button>
        <button onClick={() => handleZoom('in')}>Zoom In</button>
        <button onClick={() => handleZoom('out')}>Zoom Out</button>
      </div>
    </div>
  );
};

DegreeImageViewer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoRotate: PropTypes.bool,
  zoom: PropTypes.bool,
};

DegreeImageViewer.defaultProps = {
  autoRotate: true,
  zoom: true,
};

export default DegreeImageViewer;