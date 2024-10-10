import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  background-color: ${({ selected }) => (selected ? '#007bff' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background-color: ${({ selected, disabled }) =>
      disabled ? 'white' : selected ? '#0056b3' : '#f0f0f0'};
  }
`;

const MultiselectList = ({ items, disabled }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (item) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((i) => i !== item)
        : [...prevSelectedItems, item]
    );
  };

  return (
    <Container>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            selected={selectedItems.includes(item)}
            disabled={disabled}
            onClick={() => toggleSelect(item)}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

MultiselectList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
};

MultiselectList.defaultProps = {
  disabled: false,
};

export default MultiselectList;