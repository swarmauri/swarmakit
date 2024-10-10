import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ViewerContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  background-color: #000;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 18px;
`;

const ZoomControls = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
`;

const ControlButton = styled.button`
  padding: 5px 10px;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

const DegreeImageViewer = ({ images, isRotating, isZoomed, isLoading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    let interval;
    if (isRotating) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRotating, images.length]);

  const handleZoomIn = () => setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2));
  const handleZoomOut = () => setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 1));

  return (
    <ViewerContainer>
      {isLoading ? (
        <LoadingOverlay>Loading...</LoadingOverlay>
      ) : (
        <>
          <Image
            src={images[currentIndex]}
            alt="360-Degree View"
            style={{ transform: `scale(${zoomLevel})` }}
          />
          <ZoomControls>
            <ControlButton onClick={handleZoomIn}>Zoom In</ControlButton>
            <ControlButton onClick={handleZoomOut}>Zoom Out</ControlButton>
          </ZoomControls>
        </>
      )}
    </ViewerContainer>
  );
};

DegreeImageViewer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isRotating: PropTypes.bool,
  isZoomed: PropTypes.bool,
  isLoading: PropTypes.bool,
};

DegreeImageViewer.defaultProps = {
  isRotating: false,
  isZoomed: false,
  isLoading: false,
};

export default DegreeImageViewer;