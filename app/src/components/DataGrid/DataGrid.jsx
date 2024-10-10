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

const Th = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f4f4f4;
  cursor: ${({ resizable }) => (resizable ? 'col-resize' : 'default')};
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const DataGrid = ({ columns, data, paginated, searchable, resizable }) => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  const filteredData = data.filter(item =>
    columns.some(column =>
      item[column.accessor].toString().toLowerCase().includes(query.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  return (
    <GridContainer>
      {searchable && (
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      )}
      <Table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <Th key={index} resizable={resizable}>
                {column.header}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(paginated ? paginatedData : filteredData).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <Td key={colIndex}>{row[column.accessor]}</Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      {paginated && (
        <div>
          <button
            disabled={currentPage <= 0}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <button
            disabled={(currentPage + 1) * pageSize >= filteredData.length}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </GridContainer>
  );
};

DataGrid.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
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