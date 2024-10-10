import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselSlide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const Carousel = ({ images, autoPlay, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(slideInterval);
  }, [autoPlay, isPaused, interval, images.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <CarouselContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CarouselTrack style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <CarouselSlide key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </CarouselSlide>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
};

Carousel.defaultProps = {
  autoPlay: true,
  interval: 3000,
};

export default Carousel;