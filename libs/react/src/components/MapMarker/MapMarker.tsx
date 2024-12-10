import React from 'react';
import './MapMarker.css';

interface MapMarkerProps {
  status: 'default' | 'hovered' | 'selected' | 'clustered' | 'disabled';
  label?: string;
}

const MapMarker: React.FC<MapMarkerProps> = ({ status, label }) => {
  return (
    <div className={`map-marker ${status}`} aria-label={label || 'Map Marker'}>
      {label && <span className="marker-label">{label}</span>}
    </div>
  );
};

export default MapMarker;