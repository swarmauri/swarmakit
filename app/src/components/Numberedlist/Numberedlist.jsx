import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.ol`
  width: 100%;
  padding-left: 20px;
`;

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: ${(props) => (props.selected ? '#e0f7fa' : 'white')};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.disabled ? 'white' : '#f1f1f1')};
  }
  ${(props) => props.disabled && `pointer-events: none; color: #ccc;`}
`;

const Numberedlist = ({ items, disabledItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem
          key={index}
          selected={selectedItem === item}
          onClick={() => handleSelect(item)}
          disabled={disabledItems.includes(item)}
        >
          {item}
        </ListItem>
      ))}
    </ListContainer>
  );
};

Numberedlist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabledItems: PropTypes.arrayOf(PropTypes.string),
};

Numberedlist.defaultProps = {
  disabledItems: [],
};

export default Numberedlist;