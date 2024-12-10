import React from 'react';
import './MapScaleIndicator.css';

interface MapScaleIndicatorProps {
  visible?: boolean;
  updating?: boolean;
  scale: string;
}

const MapScaleIndicator: React.FC<MapScaleIndicatorProps> = ({ visible, updating, scale }) => {
  return (
    <div
      className={`map-scale-indicator ${visible ? 'visible' : 'hidden'} ${updating ? 'updating' : ''}`}
      aria-live="polite"
      aria-hidden={!visible}
    >
      {updating ? 'Updating...' : `Scale: ${scale}`}
    </div>
  );
};

export default MapScaleIndicator;