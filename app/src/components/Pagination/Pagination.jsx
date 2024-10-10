import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  border: 1px solid #ddd;
  background-color: ${(props) => (props.active ? '#007bff' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.active ? '#0056b3' : '#f1f1f1')};
  }
  ${(props) => props.disabled && `pointer-events: none; color: #ccc;`}
`;

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (page) => {
    if (onPageChange) onPageChange(page);
  };

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageNumber
          key={index}
          active={currentPage === index + 1}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </PageNumber>
      ))}
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};

export default Pagination;