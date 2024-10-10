import React from 'react';
import PropTypes from 'prop-types';
import './PaginationPageNumbersPrevNext.css';

const PaginationPageNumbersPrevNext = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button className="prev" onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </button>
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>
      <button className="next" onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

PaginationPageNumbersPrevNext.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationPageNumbersPrevNext;