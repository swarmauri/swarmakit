import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  overflow-y: auto;
  height: 400px;
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const LoadingMessage = styled.div`
  padding: 10px;
  text-align: center;
`;

const VirtualizedList = ({ items, loadMore, isLoading, hasMore }) => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(items.slice(0, 20));
  }, [items]);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom && hasMore && !isLoading) {
      loadMore();
    }
  };

  return (
    <ListContainer onScroll={handleScroll}>
      {visibleItems.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
      {isLoading && <LoadingMessage>Loading more...</LoadingMessage>}
      {!hasMore && <LoadingMessage>End of List</LoadingMessage>}
    </ListContainer>
  );
};

VirtualizedList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default VirtualizedList;