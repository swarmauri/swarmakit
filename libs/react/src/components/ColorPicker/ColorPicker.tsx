import React, { useState } from 'react';
import './ColorPicker.css';

interface ColorPickerProps {
  onColorSelect: (color: string) => void;
  initialColor?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorSelect, initialColor = '#000000' }) => {
  const [currentColor, setCurrentColor] = useState<string>(initialColor);
  const [colorHistory, setColorHistory] = useState<string[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setCurrentColor(newColor);
    onColorSelect(newColor);
  };

  const addToHistory = (color: string) => {
    setColorHistory((prevHistory) => [...new Set([color, ...prevHistory])].slice(0, 5));
  };

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  const selectColorFromHistory = (color: string) => {
    setCurrentColor(color);
    onColorSelect(color);
  };

  return (
    <div className={`color-picker ${isActive ? 'active' : ''}`}>
      <button onClick={toggleActiveState} className="color-toggle" aria-label="Toggle Color Picker">
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
      {isActive && (
        <div className="color-settings">
          <input type="color" value={currentColor} onChange={handleColorChange} aria-label="Select Color" />
          <input type="text" value={currentColor} onChange={handleColorChange} aria-label="Hex Code" />
          <button onClick={() => addToHistory(currentColor)} className="add-history" aria-label="Add to History">
            Add to History
          </button>
          <div className="color-history">
            {colorHistory.map((color, index) => (
              <div
                key={index}
                className="color-history-item"
                style={{ backgroundColor: color }}
                onClick={() => selectColorFromHistory(color)}
                aria-label={`Color ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;