import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const LoadingIndicator = styled.div`
  text-align: center;
  padding: 10px;
  color: #888;
`;

const Virtualizedlist = ({ items, loadMore, hasMore }) => {
  const listRef = useRef(null);

  const handleScroll = () => {
    if (
      listRef.current.scrollTop + listRef.current.clientHeight >=
      listRef.current.scrollHeight
    ) {
      loadMore();
    }
  };

  useEffect(() => {
    const listNode = listRef.current;
    listNode.addEventListener('scroll', handleScroll);
    return () => {
      listNode.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ListContainer ref={listRef}>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
      {hasMore && <LoadingIndicator>Loading more...</LoadingIndicator>}
      {!hasMore && items.length > 0 && (
        <LoadingIndicator>End of List</LoadingIndicator>
      )}
    </ListContainer>
  );
};

Virtualizedlist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Virtualizedlist;