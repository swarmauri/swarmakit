import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
`;

const List = styled.ol`
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  background-color: ${props => (props.selected ? '#007bff' : '#fff')};
  color: ${props => (props.selected ? '#fff' : '#000')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${props => (props.selected ? '#0056b3' : '#f0f0f0')};
  }
`;

const NumberedList = ({ items, disabled }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    if (disabled) return;
    setSelectedItem(selectedItem === item ? null : item);
  };

  return (
    <ListContainer>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            selected={selectedItem === item}
            disabled={disabled}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
};

NumberedList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
};

NumberedList.defaultProps = {
  disabled: false,
};

export default NumberedList;