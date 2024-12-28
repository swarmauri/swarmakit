import React, { useState, useEffect } from 'react';

export interface ImageViewerProps {
  images: string[];
  isRotating: boolean;
  isZoomed: boolean;
  isLoading: boolean;
}

const DegreeImageViewer: React.FC<ImageViewerProps> = ({ images, isRotating, isZoomed, isLoading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isRotating) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isRotating, images.length]);

  const zoomClass = isZoomed ? 'zoomed' : '';

  return (
    <div className={`image-viewer ${zoomClass}`}>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <img src={images[currentIndex]} alt={`Frame ${currentIndex}`} />
      )}
    </div>
  );
};

export default DegreeImageViewer;