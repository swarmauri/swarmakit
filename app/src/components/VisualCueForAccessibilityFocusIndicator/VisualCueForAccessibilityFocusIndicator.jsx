import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FocusIndicator = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 4px;
  border: 2px solid transparent;
  background-color: #f5f5f5;
  outline: none;
  transition: border-color 0.3s ease;

  ${({ isFocused }) =>
    isFocused &&
    `
    border-color: #1976d2;
  `}
`;

const VisualCueForAccessibilityFocusIndicator = ({ content, isFocused }) => {
  return (
    <FocusIndicator tabIndex={0} isFocused={isFocused}>
      {content}
    </FocusIndicator>
  );
};

VisualCueForAccessibilityFocusIndicator.propTypes = {
  content: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default VisualCueForAccessibilityFocusIndicator;