import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const PageButton = styled.button`
  background-color: #dfe6e9;
  border: none;
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  &:disabled {
    background-color: #b2bec3;
    cursor: not-allowed;
  }
`;

const PaginationControl = ({ currentPage, totalPages, onPageChange, loading }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <PaginationWrapper>
      <PageButton onClick={() => onPageChange(1)} disabled={currentPage === 1 || loading}>
        First
      </PageButton>
      <PageButton onClick={handlePreviousPage} disabled={currentPage === 1 || loading}>
        Previous
      </PageButton>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <PageButton onClick={handleNextPage} disabled={currentPage === totalPages || loading}>
        Next
      </PageButton>
      <PageButton onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages || loading}>
        Last
      </PageButton>
    </PaginationWrapper>
  );
};

PaginationControl.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
  loading: PropTypes.bool,
};

PaginationControl.defaultProps = {
  currentPage: 1,
  totalPages: 1,
  onPageChange: () => {},
  loading: false,
};

export default PaginationControl;