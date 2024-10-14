// GeolocationMap.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './GeolocationMap.css';

const GeolocationMap = ({ latitude, longitude, zoomLevel }) => {
  return (
    <div className="geolocation-map">
      <iframe
        title="Geolocation Map"
        src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${latitude},${longitude}&zoom=${zoomLevel}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

GeolocationMap.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoomLevel: PropTypes.number,
};

GeolocationMap.defaultProps = {
  zoomLevel: 10,
};

export default GeolocationMap;