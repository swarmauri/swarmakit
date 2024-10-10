import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  background-color: #f4f4f4;
`;

const TableRow = styled.tr`
  background-color: ${(props) => (props.selected ? '#e6f7ff' : 'white')};
  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const SortableTable = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleSort = (columnKey) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === columnKey && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key: columnKey, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column) => (
            <TableHeader key={column.key} onClick={() => handleSort(column.key)}>
              {column.header}
            </TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <TableRow
            key={index}
            selected={selectedRow === index}
            onClick={() => setSelectedRow(index)}
          >
            {columns.map((column) => (
              <TableData key={column.key}>{row[column.key]}</TableData>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

SortableTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SortableTable;