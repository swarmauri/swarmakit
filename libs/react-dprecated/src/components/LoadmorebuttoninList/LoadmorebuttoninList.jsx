import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  background-color: white;
`;

const LoadMoreButton = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const LoadmorebuttoninList = ({ items, loadMore, hasMore }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    loadMore().finally(() => setIsLoading(false));
  };

  return (
    <Container>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      {hasMore ? (
        <LoadMoreButton onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load More'}
        </LoadMoreButton>
      ) : (
        <p>End of List</p>
      )}
    </Container>
  );
};

LoadmorebuttoninList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default LoadmorebuttoninList;