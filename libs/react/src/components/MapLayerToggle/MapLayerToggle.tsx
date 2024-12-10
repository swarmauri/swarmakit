import React from 'react';
import './MapLayerToggle.css';

interface MapLayerToggleProps {
  status: 'active' | 'inactive' | 'hovered' | 'disabled';
  label: string;
  onClick: () => void;
}

const MapLayerToggle: React.FC<MapLayerToggleProps> = ({ status, label, onClick }) => {
  return (
    <button
      className={`map-layer-toggle ${status}`}
      onClick={onClick}
      aria-label={label}
      disabled={status === 'disabled'}
    >
      {label}
    </button>
  );
};

export default MapLayerToggle;