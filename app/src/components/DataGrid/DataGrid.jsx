import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const DataGrid = ({ columns, data, paginated, searchable, resizable }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    columns.some(column =>
      item[column].toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <GridContainer>
      {searchable && (
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search..."
          style={{ marginBottom: '10px', padding: '5px' }}
        />
      )}
      <Table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <TableHeader key={index}>{col}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex}>{row[col]}</TableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </GridContainer>
  );
};

DataGrid.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  paginated: PropTypes.bool,
  searchable: PropTypes.bool,
  resizable: PropTypes.bool,
};

DataGrid.defaultProps = {
  paginated: false,
  searchable: false,
  resizable: false,
};

export default DataGrid;