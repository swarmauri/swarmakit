import React from 'react';
import './MapLegend.css';

interface MapLegendProps {
  visibility: 'visible' | 'hidden';
  expandState: 'expanded' | 'collapsed';
  items: Array<{ symbol: string; description: string }>;
}

const MapLegend: React.FC<MapLegendProps> = ({ visibility, expandState, items }) => {
  return (
    <div className={`map-legend ${visibility} ${expandState}`} role="region" aria-expanded={expandState === 'expanded'}>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="legend-item">
            <span className="symbol">{item.symbol}</span>
            <span className="description">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapLegend;