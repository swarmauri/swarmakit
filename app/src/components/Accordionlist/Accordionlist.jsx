import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Accordion from './Accordion';

const AccordionListContainer = styled.div`
  width: 100%;
`;

const AccordionList = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionListContainer>
      {items.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        >
          {item.content}
        </Accordion>
      ))}
    </AccordionListContainer>
  );
};

AccordionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default AccordionList;