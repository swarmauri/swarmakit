import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const PageNumber = styled.button`
  border: none;
  background-color: ${({ active }) => (active ? '#007bff' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#007bff')};
  margin: 0 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#f0f0f0')};
  }
`;

const Pagination = ({ pages, activePage, onPageChange }) => {
  return (
    <PaginationContainer>
      {Array.from({ length: pages }, (_, index) => (
        <PageNumber
          key={index}
          active={index + 1 === activePage}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </PageNumber>
      ))}
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;