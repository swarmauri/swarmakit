import React, { useState } from 'react';
import './ZoomTool.css';

interface ZoomToolProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFitToScreen: () => void;
  onReset: () => void;
  zoomLevel: number;
}

const ZoomTool: React.FC<ZoomToolProps> = ({
  onZoomIn, 
  onZoomOut,
  onFitToScreen,
  onReset,
  zoomLevel
}) => {
  return (
    <div className="zoom-tool">
      <button onClick={onZoomOut} aria-label="Zoom out">
        Zoom Out
      </button>
      <span className="zoom-level" aria-live="polite">
        {zoomLevel}%
      </span>
      <button onClick={onZoomIn} aria-label="Zoom in">
        Zoom In
      </button>
      <button onClick={onFitToScreen} aria-label="Fit to screen">
        Fit to Screen
      </button>
      <button onClick={onReset} aria-label="Reset zoom">
        Reset
      </button>
    </div>
  );
};

export default ZoomTool;