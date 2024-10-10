import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const Slide = styled.div`
  min-width: 100%;
  transition: transform 0.5s ease-in-out;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide
          key={index}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <Image src={image} alt={`Slide ${index}`} />
        </Slide>
      ))}
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </SliderContainer>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlider;