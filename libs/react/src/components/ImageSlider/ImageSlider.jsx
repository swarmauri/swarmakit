import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-slider">
      <button className="slider-button prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <div className="slider-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slider-image ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <button className="slider-button next" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlider;