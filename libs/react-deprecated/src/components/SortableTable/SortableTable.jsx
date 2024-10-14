import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f5f5f5;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ddd;
  position: sticky;
  top: 0;
`;

const TableRow = styled.tr`
  background-color: ${({ isSelected }) => (isSelected ? '#e0f7fa' : 'white')};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const SortableTable = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const sortedData = React.useMemo(() => {
    if (sortConfig !== null) {
      return [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            {columns.map((column) => (
              <TableHeader
                key={column.key}
                onClick={() => requestSort(column.key)}
              >
                {column.label}
              </TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <TableRow
              key={index}
              isSelected={selectedRow === index}
              onClick={() => setSelectedRow(index)}
            >
              {columns.map((column) => (
                <TableCell key={column.key}>{row[column.key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

SortableTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SortableTable;