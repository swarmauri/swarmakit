import React, { useState } from 'react';
import './LayerPanel.css';

interface Layer {
  id: number;
  name: string;
  opacity: number;
  visible: boolean;
}

interface LayerPanelProps {
  onLayerChange: (layers: Layer[]) => void;
}

const LayerPanel: React.FC<LayerPanelProps> = ({ onLayerChange }) => {
  const [layers, setLayers] = useState<Layer[]>([]);
  const [activeLayerId, setActiveLayerId] = useState<number | null>(null);

  const addLayer = () => {
    const newLayer: Layer = {
      id: layers.length,
      name: `Layer ${layers.length + 1}`,
      opacity: 1,
      visible: true,
    };
    const updatedLayers = [...layers, newLayer];
    setLayers(updatedLayers);
    onLayerChange(updatedLayers);
  };

  const removeLayer = (id: number) => {
    const updatedLayers = layers.filter(layer => layer.id !== id);
    setLayers(updatedLayers);
    onLayerChange(updatedLayers);
  };

  const renameLayer = (id: number, newName: string) => {
    const updatedLayers = layers.map(layer =>
      layer.id === id ? { ...layer, name: newName } : layer
    );
    setLayers(updatedLayers);
    onLayerChange(updatedLayers);
  };

  const toggleLayerVisibility = (id: number) => {
    const updatedLayers = layers.map(layer =>
      layer.id === id ? { ...layer, visible: !layer.visible } : layer
    );
    setLayers(updatedLayers);
    onLayerChange(updatedLayers);
  };

  const changeLayerOpacity = (id: number, opacity: number) => {
    const updatedLayers = layers.map(layer =>
      layer.id === id ? { ...layer, opacity } : layer
    );
    setLayers(updatedLayers);
    onLayerChange(updatedLayers);
  };

  return (
    <div className="layer-panel">
      <button onClick={addLayer} aria-label="Add Layer" className="add-layer">Add Layer</button>
      <ul className="layer-list">
        {layers.map(layer => (
          <li key={layer.id} className={`layer-item ${layer.id === activeLayerId ? 'active' : ''}`}>
            <input
              type="text"
              value={layer.name}
              onChange={(e) => renameLayer(layer.id, e.target.value)}
              aria-label="Layer Name"
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={layer.opacity}
              onChange={(e) => changeLayerOpacity(layer.id, parseFloat(e.target.value))}
              aria-label="Layer Opacity"
            />
            <button onClick={() => toggleLayerVisibility(layer.id)} aria-label="Toggle Visibility">
              {layer.visible ? 'Hide' : 'Show'}
            </button>
            <button onClick={() => removeLayer(layer.id)} aria-label="Remove Layer">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LayerPanel;