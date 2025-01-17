import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav aria-label="Pagination">
      <ul className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageClick(index + 1)}
            aria-current={currentPage === index + 1 ? 'page' : undefined}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;