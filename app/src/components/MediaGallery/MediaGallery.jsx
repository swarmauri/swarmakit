import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px;
  cursor: pointer;
`;

const ExpandedView = styled.img`
  width: 500px;
  height: 500px;
  margin: 20px 0;
  transition: transform 0.3s;
`;

const ControlButton = styled.button`
  margin: 5px;
  cursor: pointer;
`;

const MediaGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <GalleryContainer>
      <ThumbnailWrapper>
        {images.map((image, index) => (
          <Thumbnail
            key={image}
            src={image}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </ThumbnailWrapper>
      <ExpandedView
        src={images[currentIndex]}
        style={{ transform: isZoomed ? 'scale(1.5)' : 'scale(1)' }}
      />
      <div>
        <ControlButton onClick={prevImage}>Previous</ControlButton>
        <ControlButton onClick={nextImage}>Next</ControlButton>
        <ControlButton onClick={toggleZoom}>
          {isZoomed ? 'Zoom Out' : 'Zoom In'}
        </ControlButton>
      </div>
    </GalleryContainer>
  );
};

MediaGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MediaGallery;