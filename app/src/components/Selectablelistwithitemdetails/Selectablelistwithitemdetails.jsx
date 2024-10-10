import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ListItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  background-color: ${(props) => (props.selected ? '#e6f7ff' : 'white')};
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Details = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const Selectablelistwithitemdetails = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
    setDetailsOpen(!detailsOpen);
  };

  return (
    <ListContainer>
      {items.map((item, index) => (
        <div key={index}>
          <ListItem
            selected={selectedIndex === index}
            onClick={() => handleItemClick(index)}
          >
            {item.title}
          </ListItem>
          <Details open={selectedIndex === index && detailsOpen}>
            {item.details}
          </Details>
        </div>
      ))}
    </ListContainer>
  );
};

Selectablelistwithitemdetails.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Selectablelistwithitemdetails;