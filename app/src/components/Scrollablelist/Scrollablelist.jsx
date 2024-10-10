import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ListItem = styled.div`
  padding: 10px 15px;
  margin: 5px 0;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
  &:last-child {
    border-bottom: none;
  }
  ${props => props.disabled && `
    background-color: #f9f9f9;
    cursor: not-allowed;
  `}
`;

const Scrollablelist = ({ items, onItemSelect, disabled }) => {
  return (
    <ListContainer>
      {items.map(item => (
        <ListItem
          key={item.id}
          onClick={() => !disabled && onItemSelect(item.id)}
          disabled={disabled}
        >
          {item.name}
        </ListItem>
      ))}
    </ListContainer>
  );
};

Scrollablelist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onItemSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Scrollablelist.defaultProps = {
  disabled: false,
};

export default Scrollablelist;