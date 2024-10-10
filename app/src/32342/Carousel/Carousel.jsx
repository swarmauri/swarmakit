import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

const Carousel = ({ images, autoPlayInterval }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (isAutoPlay) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [isAutoPlay, autoPlayInterval, images.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="carousel-container" onMouseEnter={() => setIsAutoPlay(false)} onMouseLeave={() => setIsAutoPlay(true)}>
      <div className="carousel-slides">
        {images.map((image, index) => (
          <div key={index} className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button key={index} className={`indicator ${index === activeIndex ? 'active' : ''}`} onClick={() => goToSlide(index)} />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoPlayInterval: PropTypes.number,
};

Carousel.defaultProps = {
  autoPlayInterval: 3000,
};

export default Carousel;