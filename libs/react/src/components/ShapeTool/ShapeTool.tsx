import React, { useState } from 'react';
import './ShapeTool.css';

type Shape = 'rectangle' | 'circle' | 'ellipse' | 'line';

interface ShapeToolProps {
  onShapeDrawn: (shape: Shape, properties: ShapeProperties) => void;
}

interface ShapeProperties {
  size: number;
  fillColor: string;
  borderColor: string;
  thickness: number;
}

const ShapeTool: React.FC<ShapeToolProps> = ({ onShapeDrawn }) => {
  const [selectedShape, setSelectedShape] = useState<Shape>('rectangle');
  const [properties, setProperties] = useState<ShapeProperties>({
    size: 50,
    fillColor: '#000000',
    borderColor: '#000000',
    thickness: 2,
  });
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleShapeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedShape(event.target.value as Shape);
  };

  const handlePropertiesChange = (property: keyof ShapeProperties) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setProperties({ ...properties, [property]: event.target.value });
  };

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  const drawShape = () => {
    onShapeDrawn(selectedShape, properties);
  };

  return (
    <div className={`shape-tool ${isActive ? 'active' : ''}`}>
      <button onClick={toggleActiveState} className="shape-toggle" aria-label="Toggle Shape Tool">
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
      <div className="shape-settings">
        <label>
          Shape:
          <select value={selectedShape} onChange={handleShapeChange} aria-label="Select Shape">
            <option value="rectangle">Rectangle</option>
            <option value="circle">Circle</option>
            <option value="ellipse">Ellipse</option>
            <option value="line">Line</option>
          </select>
        </label>
        <label>
          Size:
          <input type="range" min="10" max="200" value={properties.size} onChange={handlePropertiesChange('size')} aria-label="Shape Size" />
        </label>
        <label>
          Fill Color:
          <input type="color" value={properties.fillColor} onChange={handlePropertiesChange('fillColor')} aria-label="Fill Color" />
        </label>
        <label>
          Border Color:
          <input type="color" value={properties.borderColor} onChange={handlePropertiesChange('borderColor')} aria-label="Border Color" />
        </label>
        <label>
          Thickness:
          <input type="range" min="1" max="10" value={properties.thickness} onChange={handlePropertiesChange('thickness')} aria-label="Border Thickness" />
        </label>
        <button onClick={drawShape} className="draw-button" aria-label="Draw Shape">
          Draw Shape
        </button>
      </div>
    </div>
  );
};

export default ShapeTool;