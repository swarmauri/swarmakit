import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Accordion from '../Accordion';

const AccordionListWrapper = styled.div`
  width: 100%;
`;

const AccordionList = ({ items }) => {
  return (
    <AccordionListWrapper>
      {items.map((item, index) => (
        <Accordion key={index} title={item.title}>
          {item.content}
        </Accordion>
      ))}
    </AccordionListWrapper>
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