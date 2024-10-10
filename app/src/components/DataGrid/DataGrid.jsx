import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DataGrid.css';

const DataGrid = ({ columns, data, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [resizableColumns, setResizableColumns] = useState({});

  const filteredData = data.filter((row) =>
    columns.some((column) =>
      row[column.accessor].toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleResize = (index, newSize) => {
    setResizableColumns((prev) => ({ ...prev, [index]: newSize }));
  };

  const paginatedData = filteredData.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  return (
    <div className="data-grid">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={column.accessor}
                style={{ width: resizableColumns[index] || 'auto' }}
              >
                {column.label}
                <div
                  className="resize-handle"
                  onMouseDown={(e) => {
                    const startX = e.clientX;
                    const startWidth = e.target.parentElement.offsetWidth;
                    const onMouseMove = (moveEvent) => {
                      const newWidth = startWidth + (moveEvent.clientX - startX);
                      handleResize(index, `${newWidth}px`);
                    };
                    const onMouseUp = () => {
                      document.removeEventListener('mousemove', onMouseMove);
                      document.removeEventListener('mouseup', onMouseUp);
                    };
                    document.addEventListener('mousemove', onMouseMove);
                    document.addEventListener('mouseup', onMouseUp);
                  }}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-controls">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}>
          Previous
        </button>
        <span>{currentPage + 1}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(filteredData.length / rowsPerPage) - 1)
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

DataGrid.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowsPerPage: PropTypes.number,
};

DataGrid.defaultProps = {
  rowsPerPage: 5,
};

export default DataGrid;