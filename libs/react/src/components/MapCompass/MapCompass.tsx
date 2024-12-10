import React from 'react';
import './MapCompass.css';

interface MapCompassProps {
  orientation: number; // Orientation in degrees
  hidden?: boolean;
}

const MapCompass: React.FC<MapCompassProps> = ({ orientation, hidden }) => {
  return (
    <div
      className={`map-compass ${hidden ? 'hidden' : ''}`}
      aria-hidden={hidden}
      aria-label={`Map orientation is ${orientation} degrees`}
    >
      <div className="compass-icon" style={{ transform: `rotate(${orientation}deg)` }}>
        🧭
      </div>
    </div>
  );
};

export default MapCompass;