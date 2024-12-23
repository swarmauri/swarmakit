import React from 'react';
import './DataGrid.css';

interface DataGridProps {
  state: 'loading' | 'rendered' | 'empty' | 'resized' | 'sorted' | 'filtered' | 'paginated' | 'selected';
  columns: string[];
  data: Array<{ [key: string]: any }>;
}

const DataGrid: React.FC<DataGridProps> = ({ state, columns, data }) => {
  return (
    <div className={`datagrid ${state}`}>
      {state === 'loading' && <div className="datagrid-loading">Loading...</div>}
      {state === 'empty' && <div className="datagrid-empty">No data available</div>}
      {(state === 'rendered' || state === 'resized' || state === 'sorted' || state === 'filtered' || state === 'paginated' || state === 'selected') && (
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataGrid;