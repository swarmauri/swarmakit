import React, { useState } from 'react';
import './DataTable.css';

interface Column {
  key: string;
  header: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface DataTableProps {
  data: Record<string, any>[];
  columns: Column[];
  loading: boolean;
  onSort: (key: string) => void;
  onFilter: (key: string, value: string) => void;
  onSelectRow: (row: Record<string, any>) => void;
  onDeleteRow: (row: Record<string, any>) => void;
  onEditRow: (row: Record<string, any>) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, columns, loading, onSort, onFilter, onSelectRow, onDeleteRow, onEditRow }) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleRowClick = (index: number, row: Record<string, any>) => {
    setSelectedRow(index);
    onSelectRow(row);
  };

  return (
    <div className="data-table">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} style={{ width: column.width, textAlign: column.align }} onClick={() => onSort(column.key)}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={selectedRow === index ? 'selected' : ''} onClick={() => handleRowClick(index, row)}>
                {columns.map((column) => (
                  <td key={column.key} style={{ textAlign: column.align }}>
                    {row[column.key]}
                  </td>
                ))}
                <td className="row-actions">
                  <button onClick={() => onEditRow(row)}>Edit</button>
                  <button onClick={() => onDeleteRow(row)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTable;