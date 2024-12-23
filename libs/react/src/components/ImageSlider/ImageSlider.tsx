import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
  width?: string;
  height?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, width = '600px', height = '400px' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider" style={{ width, height }}>
      <button className="prev-button" onClick={handlePrev} aria-label="Previous image">‹</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
      <button className="next-button" onClick={handleNext} aria-label="Next image">›</button>
    </div>
  );
};

export default ImageSlider;