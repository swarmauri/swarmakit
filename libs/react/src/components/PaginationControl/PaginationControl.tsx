import React from 'react';
import './PaginationControl.css';

interface PaginationControlProps {
  totalPages: number;
  currentPage: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

const PaginationControl: React.FC<PaginationControlProps> = ({
  totalPages,
  currentPage,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination-control">
      <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
        First
      </button>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
      <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
        Last
      </button>
      <select value={rowsPerPage} onChange={(e) => onRowsPerPageChange(Number(e.target.value))}>
        {[10, 20, 50, 100].map((size) => (
          <option key={size} value={size}>
            {size} rows
          </option>
        ))}
      </select>
    </div>
  );
};

export default PaginationControl;