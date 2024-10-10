import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

const PageItem = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  background-color: ${props => (props.active ? '#007bff' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#000')};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: #e9ecef;
  }
  &:hover:not(:disabled) {
    background-color: #f0f0f0;
  }
`;

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationContainer>
      {pages.map(page => (
        <PageItem
          key={page}
          active={currentPage === page}
          onClick={() => onPageChange(page)}
          disabled={currentPage === page}
        >
          {page}
        </PageItem>
      ))}
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;