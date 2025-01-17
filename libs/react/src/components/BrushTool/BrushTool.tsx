import React, { useState } from 'react';
import './BrushTool.css';

interface BrushToolProps {
  initialColor: string;
  initialSize: number;
  initialOpacity: number;
  onBrushChange: (color: string, size: number, opacity: number) => void;
}

const BrushTool: React.FC<BrushToolProps> = ({ initialColor, initialSize, initialOpacity, onBrushChange }) => {
  const [color, setColor] = useState<string>(initialColor);
  const [size, setSize] = useState<number>(initialSize);
  const [opacity, setOpacity] = useState<number>(initialOpacity);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
    onBrushChange(event.target.value, size, opacity);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setSize(newSize);
    onBrushChange(color, newSize, opacity);
  };

  const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newOpacity = parseFloat(event.target.value);
    setOpacity(newOpacity);
    onBrushChange(color, size, newOpacity);
  };

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`brush-tool ${isActive ? 'active' : ''}`}>
      <button onClick={toggleActiveState} className="brush-toggle" aria-label="Toggle Brush Tool">
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
      <div className="brush-settings">
        <label>
          Color:
          <input type="color" value={color} onChange={handleColorChange} aria-label="Brush Color" />
        </label>
        <label>
          Size:
          <input type="range" min="1" max="100" value={size} onChange={handleSizeChange} aria-label="Brush Size" />
        </label>
        <label>
          Opacity:
          <input type="range" min="0.1" max="1" step="0.1" value={opacity} onChange={handleOpacityChange} aria-label="Brush Opacity" />
        </label>
      </div>
    </div>
  );
};

export default BrushTool;