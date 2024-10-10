import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: ${({ expanded }) => (expanded ? '#e0f7fa' : '#fff')};
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Content = styled.div`
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  padding: 10px;
  background-color: #f9f9f9;
  border-top: 1px solid #ccc;
`;

const ExpandableList = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem
          key={index}
          expanded={expandedIndex === index}
          onClick={() => toggleExpand(index)}
        >
          {item.title}
          <Content expanded={expandedIndex === index}>{item.content}</Content>
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