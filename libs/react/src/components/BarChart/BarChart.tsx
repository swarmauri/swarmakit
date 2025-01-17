import React from 'react';

export interface BarChartProps {
  state: 'loading' | 'rendered' | 'empty' | 'stacked' | 'grouped' | 'hovered' | 'clicked';
  data: Array<{ category: string; value: number }>;
}

const BarChart: React.FC<BarChartProps> = ({ state, data }) => {
  return (
    <div
      className={`bar-chart ${state}`}
      aria-label="Bar Chart"
      role="img"
    >
      {state === 'loading' && <div className="chart-loading">Loading...</div>}
      {state === 'empty' && <div className="chart-empty">No Data</div>}
      {state === 'rendered' && <div></div>}
      {state === 'stacked' && <div></div>}
      {state === 'grouped' && <div></div>}
      {state === 'hovered' && <div></div>}
      {state === 'clicked' && <div></div>}
    </div>
  );
};

export default BarChart;