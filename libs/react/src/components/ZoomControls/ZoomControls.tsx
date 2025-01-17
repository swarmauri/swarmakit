import React from 'react';
import './ZoomControls.css';

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  disabled?: boolean;
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ onZoomIn, onZoomOut, disabled }) => {
  return (
    <div className="zoom-controls">
      <button
        className="zoom-button"
        onClick={onZoomIn}
        disabled={disabled}
        aria-label="Zoom in"
      >
        +
      </button>
      <button
        className="zoom-button"
        onClick={onZoomOut}
        disabled={disabled}
        aria-label="Zoom out"
      >
        -
      </button>
    </div>
  );
};

export default ZoomControls;