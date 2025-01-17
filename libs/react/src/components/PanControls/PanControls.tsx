import React from 'react';
import './PanControls.css';

interface PanControlsProps {
  onPan: (direction: 'up' | 'down' | 'left' | 'right') => void;
}

const PanControls: React.FC<PanControlsProps> = ({ onPan }) => {
  return (
    <div className="pan-controls">
      <button className="pan-button" onClick={() => onPan('up')} aria-label="Pan up">
        ↑
      </button>
      <div className="horizontal-buttons">
        <button className="pan-button" onClick={() => onPan('left')} aria-label="Pan left">
          ←
        </button>
        <button className="pan-button" onClick={() => onPan('right')} aria-label="Pan right">
          →
        </button>
      </div>
      <button className="pan-button" onClick={() => onPan('down')} aria-label="Pan down">
        ↓
      </button>
    </div>
  );
};

export default PanControls;