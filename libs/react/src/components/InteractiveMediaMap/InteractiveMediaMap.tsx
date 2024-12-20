import React, { useState } from 'react';

interface InteractiveMediaMapProps {
  initialZoom?: number;
  markers?: Array<{ id: string; lat: number; lng: number; label: string }>;
  width?: string;
  height?: string;
}

const InteractiveMediaMap: React.FC<InteractiveMediaMapProps> = ({
  initialZoom = 1,
  markers = [],
  width = '800px',
  height = '500px'
}) => {
  const [zoom, setZoom] = useState(initialZoom);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleZoomIn = () => {
    setZoom(zoom + 1);
  };

  const handleMarkerSelect = (id: string) => {
    setSelectedMarker(id);
  };

  return (
    <div className="interactive-media-map" style={{ width, height }}>
      {loading && <div className="loading">Loading...</div>}
      <button onClick={handleZoomIn} aria-label="Zoom in">Zoom In</button>
      <div className="map">
        {markers.map((marker) => (
          <div
            key={marker.id}
            className={`marker ${selectedMarker === marker.id ? 'selected' : ''}`}
            style={{ top: `${marker.lat}%`, left: `${marker.lng}%` }}
            onClick={() => handleMarkerSelect(marker.id)}
            aria-label={`Marker ${marker.label}`}
          >
            {marker.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveMediaMap;