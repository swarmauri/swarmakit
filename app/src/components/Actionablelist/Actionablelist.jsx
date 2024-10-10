import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ActionableListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : '#e0e0e0')};
  }
`;

const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`;

const ActionableList = ({ items, onAction }) => {
  return (
    <ActionableListContainer>
      {items.map((item, index) => (
        <ListItem key={index} disabled={item.disabled}>
          <span>{item.label}</span>
          <ActionButton
            onClick={() => onAction(item)}
            disabled={item.disabled}
          >
            {item.loading ? 'Loading...' : 'Action'}
          </ActionButton>
        </ListItem>
      ))}
    </ActionableListContainer>
  );
};

ActionableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      loading: PropTypes.bool,
    })
  ).isRequired,
  onAction: PropTypes.func.isRequired,
};

export default ActionableList;