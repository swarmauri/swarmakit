import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  background-color: #fff;
`;

const LoadMoreButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #d0d0d0;
    cursor: not-allowed;
  }
`;

const LoadMoreButtonInList = ({ items, loadMoreItems }) => {
  const [visibleItems, setVisibleItems] = useState(items.slice(0, 5));
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    loadMoreItems().then((newItems) => {
      setVisibleItems([...visibleItems, ...newItems]);
      setLoading(false);
    });
  };

  const isEndOfList = visibleItems.length >= items.length;

  return (
    <ListContainer>
      <List>
        {visibleItems.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      {!isEndOfList && (
        <LoadMoreButton onClick={handleLoadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </LoadMoreButton>
      )}
      {isEndOfList && <p>End of List</p>}
    </ListContainer>
  );
};

LoadMoreButtonInList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadMoreItems: PropTypes.func.isRequired,
};

export default LoadMoreButtonInList;