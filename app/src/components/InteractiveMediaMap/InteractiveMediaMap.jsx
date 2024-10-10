import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InteractiveMediaMap.css';

const InteractiveMediaMap = ({ markers }) => {
  const [zoomedIn, setZoomedIn] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleZoomToggle = () => {
    setZoomedIn(!zoomedIn);
  };

  const handleMarkerSelect = (marker) => {
    setSelectedMarker(marker);
  };

  const handleMapLoad = () => {
    setLoading(false);
  };

  return (
    <div className={`interactive-map ${zoomedIn ? 'zoomed-in' : ''}`}>
      {loading && <div className="loading-spinner">Loading...</div>}
      {!loading && (
        <div className="map-container" onLoad={handleMapLoad}>
          {markers.map((marker, index) => (
            <div
              key={index}
              className={`map-marker ${selectedMarker === marker ? 'selected' : ''}`}
              onClick={() => handleMarkerSelect(marker)}
            >
              {marker.name}
            </div>
          ))}
        </div>
      )}
      <button className="zoom-button" onClick={handleZoomToggle}>
        {zoomedIn ? 'Zoom Out' : 'Zoom In'}
      </button>
    </div>
  );
};

InteractiveMediaMap.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default InteractiveMediaMap;