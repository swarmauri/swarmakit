import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridWrapper = styled.div`
  overflow-x: auto;
  margin: 20px 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  cursor: ${({ resizable }) => (resizable ? 'col-resize' : 'default')};
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const SearchInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const DataGrid = ({ columns, data, paginated, searchEnabled, resizable }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  const filteredData = data.filter((item) =>
    columns.some((column) => item[column].toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const paginatedData = paginated
    ? filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : filteredData;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <GridWrapper>
      {searchEnabled && <SearchInput placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />}
      <Table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <TableHeader key={index} resizable={resizable}>
                {column}
              </TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex}>{row[column]}</TableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      {paginated && (
        <Pagination>
          <PageButton onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            Previous
          </PageButton>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <PageButton onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            Next
          </PageButton>
        </Pagination>
      )}
    </GridWrapper>
  );
};

DataGrid.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  paginated: PropTypes.bool,
  searchEnabled: PropTypes.bool,
  resizable: PropTypes.bool,
};

DataGrid.defaultProps = {
  paginated: false,
  searchEnabled: false,
  resizable: false,
};

export default DataGrid;