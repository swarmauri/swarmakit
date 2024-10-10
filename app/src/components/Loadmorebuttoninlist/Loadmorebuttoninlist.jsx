import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const List = styled.div`
  margin-bottom: 10px;
`;

const Item = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const LoadMoreButton = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Loadmorebuttoninlist = ({ items, loadMoreItems }) => {
  const [displayedItems, setDisplayedItems] = useState(items.slice(0, 5));
  const [loading, setLoading] = useState(false);
  const [endOfList, setEndOfList] = useState(false);

  const handleLoadMore = async () => {
    setLoading(true);
    const newItems = await loadMoreItems();
    if (newItems.length === 0) {
      setEndOfList(true);
    } else {
      setDisplayedItems((prev) => [...prev, ...newItems]);
    }
    setLoading(false);
  };

  return (
    <Container>
      <List>
        {displayedItems.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </List>
      {!endOfList && (
        <LoadMoreButton onClick={handleLoadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </LoadMoreButton>
      )}
      {endOfList && <div>No more items to load.</div>}
    </Container>
  );
};

Loadmorebuttoninlist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadMoreItems: PropTypes.func.isRequired,
};

export default Loadmorebuttoninlist;