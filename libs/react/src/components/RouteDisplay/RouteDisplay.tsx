import React from 'react';
import './RouteDisplay.css';

interface RouteDisplayProps {
  status: 'planned' | 'in-progress' | 'completed' | 'error';
  routeName: string;
}

const RouteDisplay: React.FC<RouteDisplayProps> = ({ status, routeName }) => {
  return (
    <div className={`route-display ${status}`} aria-live="polite">
      <span>{routeName}</span>
      <span className="status">{status.replace('-', ' ')}</span>
    </div>
  );
};

export default RouteDisplay;