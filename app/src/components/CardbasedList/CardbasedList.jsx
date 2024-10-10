import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Card = styled.div`
  background-color: ${({ selected }) => (selected ? '#e0f7fa' : '#fff')};
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: calc(33.3333% - 16px);
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#fff' : '#f0f0f0')};
  }
`;

const CardContent = styled.div`
  margin-bottom: 10px;
`;

const CardBasedList = ({ cards, onSelect, selectedCard, disabled }) => (
  <CardContainer>
    {cards.map((card, index) => (
      <Card
        key={index}
        onClick={() => !disabled && onSelect(card)}
        selected={selectedCard === card}
        disabled={disabled}
      >
        <CardContent>{card.content}</CardContent>
      </Card>
    ))}
  </CardContainer>
);

CardBasedList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedCard: PropTypes.object,
  disabled: PropTypes.bool,
};

CardBasedList.defaultProps = {
  selectedCard: null,
  disabled: false,
};

export default CardBasedList;