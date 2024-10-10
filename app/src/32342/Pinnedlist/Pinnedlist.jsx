import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin: 5px 0;
  border: 1px solid #ccc;
  background-color: ${props => (props.selected ? '#e0f7fa' : '#fff')};
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const PinButton = styled.button`
  background-color: ${props => (props.pinned ? '#007bff' : '#ccc')};
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const Pinnedlist = ({ items, onPinToggle, onSelect, selectedItem }) => {
  return (
    <ListContainer>
      {items.map(item => (
        <ListItem
          key={item.id}
          selected={selectedItem === item.id}
          onClick={() => onSelect(item.id)}
        >
          {item.name}
          <PinButton pinned={item.pinned} onClick={() => onPinToggle(item.id)}>
            {item.pinned ? 'Unpin' : 'Pin'}
          </PinButton>
        </ListItem>
      ))}
    </ListContainer>
  );
};

Pinnedlist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      pinned: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onPinToggle: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.number,
};

export default Pinnedlist;