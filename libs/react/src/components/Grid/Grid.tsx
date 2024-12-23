import React from 'react';

interface GridProps {
  state: 'empty' | 'populated' | 'responsive' | 'stretched' | 'aligned';
  items: React.ReactNode[];
}

const Grid: React.FC<GridProps> = ({ state, items }) => {
  return (
    <div className={`grid ${state}`} role="grid">
      {state === 'empty' && <div role="gridcell">No items available</div>}
      {state !== 'empty' &&
        items.map((item, index) => (
          <div key={index} role="gridcell">
            {item}
          </div>
        ))}
    </div>
  );
};

export default Grid;