import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Card = styled.div`
  flex: 1 1 calc(25% - 16px);
  padding: 16px;
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : '#fff')};
  border: 1px solid #ddd;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  box-shadow: ${({ selected }) => (selected ? '0 0 10px rgba(0,0,0,0.3)' : 'none')};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : '#e0e0e0')};
  }
`;

const CardBasedList = ({ items, onSelect }) => {
  return (
    <CardContainer>
      {items.map((item, index) => (
        <Card
          key={index}
          disabled={item.disabled}
          selected={item.selected}
          onClick={() => !item.disabled && onSelect(item)}
        >
          {item.content}
        </Card>
      ))}
    </CardContainer>
  );
};

CardBasedList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      disabled: PropTypes.bool,
      selected: PropTypes.bool,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CardBasedList;