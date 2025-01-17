import React, { useState } from 'react';
import './EraserTool.css';

interface EraserToolProps {
  initialSize: number;
  onEraserChange: (size: number) => void;
}

const EraserTool: React.FC<EraserToolProps> = ({ initialSize, onEraserChange }) => {
  const [size, setSize] = useState<number>(initialSize);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setSize(newSize);
    onEraserChange(newSize);
  };

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`eraser-tool ${isActive ? 'active' : ''}`}>
      <button onClick={toggleActiveState} className="eraser-toggle" aria-label="Toggle Eraser Tool">
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
      <div className="eraser-settings">
        <label>
          Eraser Size:
          <input type="range" min="1" max="100" value={size} onChange={handleSizeChange} aria-label="Eraser Size" />
        </label>
      </div>
    </div>
  );
};

export default EraserTool;