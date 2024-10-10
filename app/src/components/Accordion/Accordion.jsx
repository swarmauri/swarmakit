import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  background-color: #f7f7f7;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #e7e7e7;
  }
`;

const AccordionContent = styled.div`
  padding: 10px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        {title}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>
        {content}
      </AccordionContent>
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Accordion;