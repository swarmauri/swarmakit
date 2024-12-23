import React, { useState } from 'react';
import './FillTool.css';

interface FillToolProps {
  active: boolean;
  onFill: (color: string) => void;
  tolerance: number;
}

const FillTool: React.FC<FillToolProps> = ({ active, onFill, tolerance }) => {
  const [color, setColor] = useState<string>('#000000');

  const handleFillClick = () => {
    if (active) {
      onFill(color);
    }
  };

  return (
    <div className={`fill-tool ${active ? 'active' : 'disabled'}`}>
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
        aria-label="Choose fill color"
      />
      <button 
        onClick={handleFillClick} 
        disabled={!active} 
        aria-label="Fill selected area"
      >
        Fill
      </button>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={tolerance} 
        aria-label="Adjust fill tolerance"
        className="tolerance-slider"
      />
    </div>
  );
};

export default FillTool;