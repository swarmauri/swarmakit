import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  background-color: ${(props) => (props.selected ? '#e6f7ff' : 'white')};
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const PinButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => (props.pinned ? '#007bff' : '#ccc')};
`;

const Pinnedlist = ({ items, onPinToggle, selectedItem }) => {
  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem key={index} selected={selectedItem === index}>
          <span>{item.name}</span>
          <PinButton
            pinned={item.pinned}
            onClick={() => onPinToggle(index)}
          >
            {item.pinned ? '📌' : '📍'}
          </PinButton>
        </ListItem>
      ))}
    </ListContainer>
  );
};

Pinnedlist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      pinned: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onPinToggle: PropTypes.func,
  selectedItem: PropTypes.number,
};

Pinnedlist.defaultProps = {
  onPinToggle: null,
  selectedItem: null,
};

export default Pinnedlist;