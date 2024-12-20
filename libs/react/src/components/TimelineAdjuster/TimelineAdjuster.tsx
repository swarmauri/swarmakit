import React, { useState } from 'react';
import './TimelineAdjuster.css';

interface TimelineAdjusterProps {
  initialZoomLevel: number;
}

const TimelineAdjuster: React.FC<TimelineAdjusterProps> = ({ initialZoomLevel }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(initialZoomLevel);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.max(prev - 1, 1));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.min(prev + 1, 24));
  };

  const handleDrag = (direction: 'left' | 'right') => {
    // Logic to adjust the timeline by dragging
  };

  return (
    <div className="timeline-adjuster">
      <div className="zoom-controls">
        <button aria-label="Zoom In" onClick={handleZoomIn}>Zoom In</button>
        <button aria-label="Zoom Out" onClick={handleZoomOut}>Zoom Out</button>
      </div>
      <div className="timeline-view" style={{ '--zoom-level': zoomLevel } as React.CSSProperties}>
        {/* Render the timeline with events here */}
      </div>
      <div className="drag-indicator">
        <button aria-label="Drag Left" onClick={() => handleDrag('left')}>⬅</button>
        <button aria-label="Drag Right" onClick={() => handleDrag('right')}>➡</button>
      </div>
    </div>
  );
};

export default TimelineAdjuster;