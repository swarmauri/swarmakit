import React from 'react';
import './DistanceMeasurementTool.css';

interface DistanceMeasurementToolProps {
  status: 'active' | 'inactive' | 'measuring' | 'completed';
  distance: number;
}

const DistanceMeasurementTool: React.FC<DistanceMeasurementToolProps> = ({ status, distance }) => {
  return (
    <div className={`distance-tool ${status}`} role="status" aria-live="polite">
      <span className="status">{status.replace('-', ' ')}</span>
      <span className="distance">{distance} km</span>
    </div>
  );
};

export default DistanceMeasurementTool;