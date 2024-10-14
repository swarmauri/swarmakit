import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ececec;
  background-color: ${({ isSelected }) => (isSelected ? '#e0f7fa' : 'white')};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ItemDetails = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
`;

const SelectableListWithItemDetails = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleItemClick = (item) => {
    if (selectedItem === item) {
      setDetailsOpen(!detailsOpen);
    } else {
      setSelectedItem(item);
      setDetailsOpen(true);
    }
  };

  return (
    <ListContainer>
      {items.map((item, index) => (
        <div key={index}>
          <ListItem
            isSelected={selectedItem === item}
            onClick={() => handleItemClick(item)}
          >
            {item.name}
          </ListItem>
          {selectedItem === item && detailsOpen && (
            <ItemDetails>{item.details}</ItemDetails>
          )}
        </div>
      ))}
    </ListContainer>
  );
};

SelectableListWithItemDetails.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectableListWithItemDetails;