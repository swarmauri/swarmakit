import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContextListContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ContextItem = styled.div`
  padding: 10px;
  background-color: #f7f7f7;
  cursor: pointer;
  &:hover {
    background-color: #d0d0d0;
  }
`;

const ActionContainer = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ContextualList = ({ items }) => {
  const [actionTriggered, setActionTriggered] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleItemClick = () => {
    setActionTriggered(true);
    setDismissed(false);
  };

  const handleDismiss = () => {
    setDismissed(true);
    setActionTriggered(false);
  };

  return (
    <ContextListContainer>
      <ContextItem onClick={handleItemClick}>Open Actions</ContextItem>
      <ActionContainer visible={actionTriggered && !dismissed}>
        {items.map((item, index) => (
          <div key={index} style={{ padding: '10px' }}>
            {item}
          </div>
        ))}
        <div style={{ padding: '10px', cursor: 'pointer' }} onClick={handleDismiss}>
          Dismiss
        </div>
      </ActionContainer>
    </ContextListContainer>
  );
};

ContextualList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContextualList;