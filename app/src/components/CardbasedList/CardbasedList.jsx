import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Card = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ selected }) => (selected ? '#e0f7fa' : '#fff')};
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background-color 0.3s ease;
`;

const CardbasedList = ({ cards, onSelect, selectedCardId }) => {
  return (
    <CardListWrapper>
      {cards.map((card) => (
        <Card
          key={card.id}
          selected={selectedCardId === card.id}
          disabled={card.disabled}
          onClick={() => !card.disabled && onSelect(card.id)}
        >
          {card.content}
        </Card>
      ))}
    </CardListWrapper>
  );
};

CardbasedList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedCardId: PropTypes.number,
};

export default CardbasedList;