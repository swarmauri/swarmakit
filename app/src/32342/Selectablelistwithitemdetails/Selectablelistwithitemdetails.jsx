import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ListItem = styled.div`
  padding: 10px 15px;
  margin: 5px 0;
  border-bottom: 1px solid #eee;
  background-color: ${props => (props.selected ? '#d3f4ff' : '#fff')};
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const ItemDetails = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  display: ${props => (props.open ? 'block' : 'none')};
`;

const Selectablelistwithitemdetails = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleItemClick = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
    setDetailsOpen(selectedItem !== id);
  };

  return (
    <ListContainer>
      {items.map(item => (
        <div key={item.id}>
          <ListItem
            selected={selectedItem === item.id}
            onClick={() => handleItemClick(item.id)}
          >
            {item.name}
          </ListItem>
          <ItemDetails open={selectedItem === item.id && detailsOpen}>
            {item.details}
          </ItemDetails>
        </div>
      ))}
    </ListContainer>
  );
};

Selectablelistwithitemdetails.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      details: PropTypes.string,
    })
  ).isRequired,
};

export default Selectablelistwithitemdetails;