import React from 'react';

interface HeatmapProps {
  state: 'loading' | 'rendered' | 'empty' | 'zoomed' | 'tooltipVisible' | 'hovered';
  data: Array<Array<number>>;
}

const Heatmap: React.FC<HeatmapProps> = ({ state, data }) => {
  return (
    <div
      className={`heatmap ${state}`}
      aria-label="Heatmap"
      role="img"
    >
      {state === 'loading' && <div className="heatmap-loading">Loading...</div>}
      {state === 'empty' && <div className="heatmap-empty">No Data</div>}
      {state === 'rendered' && /* Render the heatmap using data */}
      {state === 'zoomed' && /* Render heatmap with zoom effect */}
      {state === 'tooltipVisible' && /* Render heatmap with tooltip */}
      {state === 'hovered' && /* Render heatmap with hovered cell effect */}
    </div>
  );
};

export default Heatmap;