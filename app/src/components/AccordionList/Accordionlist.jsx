import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Accordion from './Accordion';

const AccordionListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccordionList = ({ items }) => {
  return (
    <AccordionListContainer>
      {items.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </AccordionListContainer>
  );
};

AccordionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AccordionList;