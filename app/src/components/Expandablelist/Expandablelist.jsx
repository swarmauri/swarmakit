import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#e0e0e0' : '#fff')};

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ExpandableContent = styled.div`
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
`;

const ExpandableList = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleItemClick = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setSelectedIndex(index);
  };

  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem
          key={index}
          onClick={() => handleItemClick(index)}
          selected={selectedIndex === index}
        >
          {item.title}
          {expandedIndex === index && (
            <ExpandableContent>{item.content}</ExpandableContent>
          )}
        </ListItem>
      ))}
    </ListContainer>
  );
};

ExpandableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExpandableList;