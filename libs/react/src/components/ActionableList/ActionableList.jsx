import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const ActionableList = ({ items, onActionClick, isLoading }) => {
  return (
    <ListWrapper>
      {items.map((item, index) => (
        <ListItem key={index} disabled={isLoading || item.disabled}>
          {item.label}
          <ActionButton
            onClick={() => onActionClick(item)}
            disabled={isLoading || item.disabled}
          >
            {isLoading ? 'Loading...' : 'Action'}
          </ActionButton>
        </ListItem>
      ))}
    </ListWrapper>
  );
};

ActionableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  onActionClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default ActionableList;