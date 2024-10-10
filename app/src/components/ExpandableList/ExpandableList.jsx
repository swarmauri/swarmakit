import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#e0f3ff' : 'white')};
  &:hover {
    background-color: #f9f9f9;
  }
`;

const ItemDetail = styled.div`
  margin-top: 5px;
  background-color: #f3f3f3;
  padding: 10px;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
`;

const ExpandableList = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleItemClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSelectClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem
          key={index}
          onClick={() => handleItemClick(index)}
          onDoubleClick={() => handleSelectClick(index)}
          selected={selectedIndex === index}
        >
          {item.title}
          <ItemDetail expanded={expandedIndex === index}>{item.detail}</ItemDetail>
        </ListItem>
      ))}
    </ListContainer>
  );
};

ExpandableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExpandableList;