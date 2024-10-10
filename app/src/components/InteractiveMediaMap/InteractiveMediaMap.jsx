import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
`;

const MapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  transform: ${({ zoomed }) => (zoomed ? 'scale(2)' : 'scale(1)')};
`;

const Marker = styled.div`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  width: 20px;
  height: 20px;
  background-color: ${({ selected }) => (selected ? 'red' : 'blue')};
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
`;

const LoadingOverlay = styled.div`
  display: ${({ loading }) => (loading ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #000;
`;

const InteractiveMediaMap = ({ mapSrc, markers, loading }) => {
  const [zoomed, setZoomed] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const toggleZoom = () => setZoomed(!zoomed);

  const handleMarkerClick = (index) => setSelectedMarker(index);

  return (
    <MapContainer onClick={toggleZoom}>
      <LoadingOverlay loading={loading}>Loading...</LoadingOverlay>
      <MapImage src={mapSrc} zoomed={zoomed} />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          top={marker.top}
          left={marker.left}
          selected={selectedMarker === index}
          onClick={(e) => {
            e.stopPropagation();
            handleMarkerClick(index);
          }}
        />
      ))}
    </MapContainer>
  );
};

InteractiveMediaMap.propTypes = {
  mapSrc: PropTypes.string.isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool,
};

InteractiveMediaMap.defaultProps = {
  loading: false,
};

export default InteractiveMediaMap;