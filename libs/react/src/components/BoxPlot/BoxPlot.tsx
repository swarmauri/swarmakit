import React from 'react';

interface BoxPlotProps {
  state: 'loading' | 'rendered' | 'empty' | 'hovered' | 'clicked' | 'tooltipVisible';
  data: Array<{ min: number; q1: number; median: number; q3: number; max: number }>;
}

const BoxPlot: React.FC<BoxPlotProps> = ({ state, data }) => {
  return (
    <div
      className={`box-plot ${state}`}
      aria-label="Box Plot"
      role="img"
    >
      {state === 'loading' && <div className="box-plot-loading">Loading...</div>}
      {state === 'empty' && <div className="box-plot-empty">No Data</div>}
      {state === 'rendered' && /* Render the box plot with the data */}
      {state === 'hovered' && /* Render box plot with hover effect */}
      {state === 'clicked' && /* Render box plot with clicked effect */}
      {state === 'tooltipVisible' && /* Render box plot with tooltip */}
    </div>
  );
};

export default BoxPlot;