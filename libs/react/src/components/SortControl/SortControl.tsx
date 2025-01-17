import React, { useState } from 'react';
import './SortControl.css';

interface SortControlProps {
  onSortChange: (column: string, direction: 'asc' | 'desc') => void;
  columns: string[];
}

const SortControl: React.FC<SortControlProps> = ({ onSortChange, columns }) => {
  const [sortState, setSortState] = useState<Record<string, 'asc' | 'desc' | null>>(
    Object.fromEntries(columns.map(column => [column, null]))
  );

  const toggleSortDirection = (column: string) => {
    const currentDirection = sortState[column];
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    setSortState({ ...sortState, [column]: newDirection });
    onSortChange(column, newDirection);
  };

  return (
    <div className="sort-control">
      {columns.map((column) => (
        <button
          key={column}
          className={`sort-button ${sortState[column]}`}
          onClick={() => toggleSortDirection(column)}
          aria-label={`Sort ${column} in ${sortState[column] === 'asc' ? 'descending' : 'ascending'} order`}
        >
          {column}
          <span className={`sort-indicator ${sortState[column]}`}></span>
        </button>
      ))}
    </div>
  );
};

export default SortControl;