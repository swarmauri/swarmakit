import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
`;

const Hero = ({ isDisplayed, image, text, cta, fullscreen }) => {
  if (!isDisplayed) return null;

  return (
    <HeroWrapper style={{ backgroundImage: `url(${image})`, height: fullscreen ? '100vh' : '50vh' }}>
      <HeroContent>
        {text && <h1>{text}</h1>}
        {cta && <button>{cta}</button>}
      </HeroContent>
    </HeroWrapper>
  );
};

Hero.propTypes = {
  isDisplayed: PropTypes.bool,
  image: PropTypes.string,
  text: PropTypes.string,
  cta: PropTypes.string,
  fullscreen: PropTypes.bool,
};

Hero.defaultProps = {
  isDisplayed: true,
  image: '',
  text: '',
  cta: '',
  fullscreen: false,
};

export default Hero;