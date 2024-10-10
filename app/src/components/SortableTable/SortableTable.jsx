import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  border-bottom: 2px solid #ddd;
  background-color: #f4f4f4;
  cursor: pointer;
`;

const TableRow = styled.tr`
  background-color: ${props => (props.selected ? '#d3f4ff' : '#fff')};
  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const SortableTable = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedRow, setSelectedRow] = useState(null);

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;
    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortConfig]);

  const handleSort = key => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleRowClick = index => {
    setSelectedRow(selectedRow === index ? null : index);
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            {columns.map(column => (
              <TableHeader key={column.key} onClick={() => handleSort(column.key)}>
                {column.label}
              </TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <TableRow
              key={index}
              selected={selectedRow === index}
              onClick={() => handleRowClick(index)}
            >
              {columns.map(column => (
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