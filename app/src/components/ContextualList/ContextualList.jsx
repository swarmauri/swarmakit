import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  background-color: #fff;
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#f0f0f0' : '#fff')};
  &:hover {
    background-color: #f9f9f9;
  }
`;

const ContextualList = ({ items, onAction }) => {
  const [dismissed, setDismissed] = useState(false);

  return (
    <ListContainer>
      {!dismissed && 
        items.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => {
              onAction(item);
              setDismissed(true);
            }}
          >
            {item}
          </ListItem>
        ))
      }
    </ListContainer>
  );
};

ContextualList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAction: PropTypes.func.isRequired,
};

export default ContextualList;