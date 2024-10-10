import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
`;

const ListHeader = styled.div`
  background-color: #e9e9e9;
  padding: 12px;
  cursor: pointer;
  font-weight: bold;
`;

const ListContent = styled.div`
  padding: 12px;
  display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
`;

const AccordionList = ({ header, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ListWrapper>
      <ListHeader onClick={toggleList}>
        {header}
      </ListHeader>
      <ListContent isExpanded={isExpanded}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </ListContent>
    </ListWrapper>
  );
};

AccordionList.propTypes = {
  header: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AccordionList;