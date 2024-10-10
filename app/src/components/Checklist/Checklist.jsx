import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChecklistContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const ChecklistItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${({ disabled }) => (disabled ? '#f9f9f9' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Checklist = ({ items, onCheck }) => {
  return (
    <ChecklistContainer>
      {items.map((item, index) => (
        <ChecklistItem key={index} disabled={item.disabled}>
          <Checkbox
            type="checkbox"
            checked={item.checked}
            indeterminate={item.partiallyChecked}
            disabled={item.disabled}
            onChange={() => !item.disabled && onCheck(item)}
          />
          {item.label}
        </ChecklistItem>
      ))}
    </ChecklistContainer>
  );
};

Checklist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool,
      partiallyChecked: PropTypes.bool,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default Checklist;