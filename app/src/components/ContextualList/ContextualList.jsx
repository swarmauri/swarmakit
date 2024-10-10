import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background: ${({ active }) => (active ? '#f0f9ff' : '#fff')};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  &:hover {
    background: #f5f5f5;
  }
`;

const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ContextualList = ({ items }) => {
  const [dismissedItems, setDismissedItems] = useState([]);
  const [actionTriggeredIndex, setActionTriggeredIndex] = useState(null);

  const handleAction = (index) => {
    setActionTriggeredIndex(index);
  };

  const handleDismiss = (index) => {
    setDismissedItems([...dismissedItems, index]);
  };

  return (
    <ListWrapper>
      {items.map((item, index) => (
        !dismissedItems.includes(index) && (
          <ListItem key={index} active={actionTriggeredIndex === index}>
            {item}
            <div>
              <ActionButton onClick={() => handleAction(index)}>Action</ActionButton>
              <ActionButton onClick={() => handleDismiss(index)}>Dismiss</ActionButton>
            </div>
          </ListItem>
        )
      ))}
    </ListWrapper>
  );
};

ContextualList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContextualList;