import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ddd;
`;

const ListItem = styled.div`
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const Loading = styled.div`
  text-align: center;
  padding: 16px;
`;

const Virtualizedlist = ({ items, loadMoreItems, hasMore }) => {
  const [listItems, setListItems] = useState(items);

  const handleScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      if (hasMore) {
        loadMoreItems();
      }
    }
  };

  useEffect(() => {
    setListItems(items);
  }, [items]);

  return (
    <ListContainer onScroll={handleScroll}>
      {listItems.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
      {hasMore ? <Loading>Loading more...</Loading> : <Loading>End of List</Loading>}
    </ListContainer>
  );
};

Virtualizedlist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadMoreItems: PropTypes.func.isRequired,
  hasMore: PropTypes.bool,
};

export default Virtualizedlist;