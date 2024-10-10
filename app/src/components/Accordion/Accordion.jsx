import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  margin: 0.5rem 0;
`;

const AccordionHeader = styled.div`
  background: #f1f1f1;
  padding: 0.75rem;
  cursor: pointer;
  &:hover {
    background: #e0e0e0;
  }
`;

const AccordionContent = styled.div`
  padding: 0.75rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Accordion = ({ title, children, isOpen: initialOpen }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleOpen}>
        {title}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>
        {children}
      </AccordionContent>
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};

Accordion.defaultProps = {
  isOpen: false,
};

export default Accordion;