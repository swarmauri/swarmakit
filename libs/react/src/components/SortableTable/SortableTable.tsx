import React, { useState } from 'react';

interface TableRow {
  id: string;
  [key: string]: any;
}

interface TableColumn {
  key: string;
  label: string;
}

interface SortableTableProps {
  rows: TableRow[];
  columns: TableColumn[];
}

const SortableTable: React.FC<SortableTableProps> = ({ rows, columns }) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (!sortKey) return 0;
    if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <table className="sortable-table">
      <thead>
        <tr>
          {columns.map(column => (
            <th
              key={column.key}
              onClick={() => handleSort(column.key)}
              aria-sort={sortKey === column.key ? sortOrder : 'none'}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map(row => (
          <tr
            key={row.id}
            className={selectedRowId === row.id ? 'selected' : ''}
            onClick={() => setSelectedRowId(row.id)}
            aria-selected={selectedRowId === row.id}
          >
            {columns.map(column => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;