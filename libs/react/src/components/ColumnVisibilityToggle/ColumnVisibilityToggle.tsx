import React, { useState } from 'react';
import './ColumnVisibilityToggle.css';

interface ColumnVisibilityToggleProps {
  columns: { id: string; label: string }[];
  onToggle: (id: string, visible: boolean) => void;
}

const ColumnVisibilityToggle: React.FC<ColumnVisibilityToggleProps> = ({ columns, onToggle }) => {
  const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>(
    columns.reduce((acc, column) => ({ ...acc, [column.id]: true }), {})
  );

  const handleToggle = (id: string) => {
    const newState = !visibleColumns[id];
    setVisibleColumns({ ...visibleColumns, [id]: newState });
    onToggle(id, newState);
  };

  return (
    <div className="column-visibility-toggle">
      {columns.map((column) => (
        <div key={column.id} className="column-toggle-item">
          <label>
            <input
              type="checkbox"
              checked={visibleColumns[column.id]}
              onChange={() => handleToggle(column.id)}
              aria-label={`Toggle ${column.label} visibility`}
            />
            {column.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ColumnVisibilityToggle;