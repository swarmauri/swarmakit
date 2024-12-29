import React, { useState } from 'react';
import './ShapeLibrary.css';

interface Shape {
  id: string;
  name: string;
  svgPath: string;
}

interface ShapeLibraryProps {
  shapes: Shape[];
  onShapeInsert: (shape: Shape) => void;
  onShapeSelect: (shape: Shape) => void;
}

const ShapeLibrary: React.FC<ShapeLibraryProps> = ({ shapes, onShapeInsert, onShapeSelect }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredShapes = shapes.filter(shape => shape.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="shape-library">
      <input
        type="text"
        placeholder="Search shapes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <div className="shapes-container">
        {filteredShapes.map(shape => (
          <div
            key={shape.id}
            className="shape-item"
            draggable
            onDragStart={() => onShapeSelect(shape)}
            onDoubleClick={() => onShapeInsert(shape)}
          >
            <svg viewBox="0 0 100 100">
              <path d={shape.svgPath} />
            </svg>
            <span>{shape.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapeLibrary;