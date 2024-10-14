import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  background-color: #fff;
  color: #333;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  overflow: hidden;
  height: ${({ isExpanded }) => (isExpanded ? 'auto' : '0')};
  transition: height 0.3s ease;
`;

const Section = ({ title, content, isVisible, isExpanded }) => {
  return (
    <SectionWrapper isVisible={isVisible} isExpanded={isExpanded}>
      <h2>{title}</h2>
      {isExpanded && <p>{content}</p>}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  isVisible: PropTypes.bool,
  isExpanded: PropTypes.bool,
};

Section.defaultProps = {
  content: '',
  isVisible: true,
  isExpanded: false,
};

export default Section;