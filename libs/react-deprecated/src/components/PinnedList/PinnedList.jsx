import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  margin: 5px 0;
  background-color: ${({ pinned }) => (pinned ? '#f0f8ff' : 'white')};
  border-left: ${({ selected }) => (selected ? '5px solid #007bff' : '5px solid transparent')};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const PinnedList = ({ items, pinnedItems, selectedItem, onSelect }) => {
  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem
          key={index}
          pinned={pinnedItems.includes(item)}
          selected={selectedItem === item}
          onClick={() => onSelect(item)}
        >
          {item}
        </ListItem>
      ))}
    </ListContainer>
  );
};

PinnedList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  pinnedItems: PropTypes.arrayOf(PropTypes.string),
  selectedItem: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

PinnedList.defaultProps = {
  pinnedItems: [],
  selectedItem: '',
};

export default PinnedList;