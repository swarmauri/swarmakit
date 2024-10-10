import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? '#f9f9f9' : '#fff')};
  border-bottom: 1px solid #ddd;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  flex-grow: 1;
`;

const Checklist = ({ items, onToggle, disabled }) => (
  <ListContainer>
    {items.map((item, index) => (
      <ListItem key={index} disabled={disabled}>
        <Checkbox
          type="checkbox"
          checked={item.checked}
          onChange={() => !disabled && onToggle(item)}
          disabled={disabled}
        />
        <Label>{item.label}</Label>
      </ListItem>
    ))}
  </ListContainer>
);

Checklist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Checklist.defaultProps = {
  disabled: false,
};

export default Checklist;