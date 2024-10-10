import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const ListItem = styled.div`
  padding: 10px 15px;
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#f0f0f0')};
  }
`;

const ActionButton = styled.button`
  margin-left: auto;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const LoadingSpinner = styled.div`
  border: 2px solid #ccc;
  border-top: 2px solid #007bff;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
  margin-left: auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ActionableList = ({ items, onAction, loading, disabled }) => (
  <ListContainer>
    {items.map((item, index) => (
      <ListItem key={index} disabled={disabled}>
        {item}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <ActionButton onClick={() => !disabled && onAction(item)}>
            Action
          </ActionButton>
        )}
      </ListItem>
    ))}
  </ListContainer>
);

ActionableList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAction: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

ActionableList.defaultProps = {
  loading: false,
  disabled: false,
};

export default ActionableList;