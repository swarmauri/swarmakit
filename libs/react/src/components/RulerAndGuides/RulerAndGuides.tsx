import React, { useState } from 'react';
import './RulerAndGuides.css';

interface RulerAndGuidesProps {
  unit: 'pixels' | 'inches';
  zoomLevel: number;
  onAddGuide: (position: number) => void;
  onMoveGuide: (oldPosition: number, newPosition: number) => void;
  onRemoveGuide: (position: number) => void;
}

const RulerAndGuides: React.FC<RulerAndGuidesProps> = ({
  unit,
  zoomLevel,
  onAddGuide,
  onMoveGuide,
  onRemoveGuide,
}) => {
  const [guides, setGuides] = useState<number[]>([]);

  const handleAddGuide = (position: number) => {
    onAddGuide(position);
    setGuides([...guides, position]);
  };

  const handleMoveGuide = (oldPosition: number, newPosition: number) => {
    onMoveGuide(oldPosition, newPosition);
    setGuides(guides.map(guide => guide === oldPosition ? newPosition : guide));
  };

  const handleRemoveGuide = (position: number) => {
    onRemoveGuide(position);
    setGuides(guides.filter(guide => guide !== position));
  };

  return (
    <div className="ruler-and-guides" style={{ zoom: zoomLevel / 100 }}>
      <div className="ruler">
        {/* Ruler rendering logic goes here */}
      </div>
      <div className="guides">
        {guides.map((guide, index) => (
          <div key={index} className="guide" style={{ left: guide }}>
            {/* Guide rendering logic goes here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RulerAndGuides;