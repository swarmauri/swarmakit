import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  background-color: #f7f7f7;
  padding: 10px;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  padding: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        {title}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionWrapper>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordion;