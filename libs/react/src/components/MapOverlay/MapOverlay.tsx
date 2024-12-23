import React from 'react';
import './MapOverlay.css';

interface MapOverlayProps {
  visibility: 'visible' | 'hidden';
  activeState: 'active' | 'disabled';
  content: React.ReactNode;
}

const MapOverlay: React.FC<MapOverlayProps> = ({ visibility, activeState, content }) => {
  return (
    <div className={`map-overlay ${visibility} ${activeState}`} aria-hidden={visibility === 'hidden'}>
      {content}
    </div>
  );
};

export default MapOverlay;