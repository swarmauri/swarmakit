import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : 'white')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ececec;
  background-color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ScrollableList = ({ items, disabled }) => {
  return (
    <ListContainer disabled={disabled}>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ListContainer>
  );
};

ScrollableList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
};

ScrollableList.defaultProps = {
  disabled: false,
};

export default ScrollableList;