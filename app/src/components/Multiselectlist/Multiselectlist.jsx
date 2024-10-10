import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: ${(props) => (props.selected ? '#e0f7fa' : 'white')};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.disabled ? 'white' : '#f1f1f1')};
  }
  ${(props) => props.disabled && `pointer-events: none; color: #ccc;`}
`;

const Multiselectlist = ({ items, disabledItems }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem
          key={index}
          selected={selectedItems.includes(item)}
          onClick={() => toggleSelect(item)}
          disabled={disabledItems.includes(item)}
        >
          {item}
        </ListItem>
      ))}
    </ListContainer>
  );
};

Multiselectlist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabledItems: PropTypes.arrayOf(PropTypes.string),
};

Multiselectlist.defaultProps = {
  disabledItems: [],
};

export default Multiselectlist;