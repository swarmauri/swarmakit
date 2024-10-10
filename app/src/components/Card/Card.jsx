import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  height: ${({ isExpanded }) => (isExpanded ? 'auto' : '100px')};
  overflow: hidden;

  &:hover {
    transform: ${({ isHovered }) => (isHovered ? 'scale(1.05)' : 'none')};
    box-shadow: ${({ isHovered }) => (isHovered ? '0 4px 12px rgba(0, 0, 0, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.1)')};
  }
`;

const CardContent = styled.div`
  margin: 8px 0;
`;

const Card = ({ title, content, isVisible, isHovered, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
    if (onClick) onClick();
  };

  return (
    <CardWrapper
      isVisible={isVisible}
      isHovered={isHovered}
      isExpanded={isExpanded}
      onClick={handleCardClick}
    >
      <h3>{title}</h3>
      <CardContent>{content}</CardContent>
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  isHovered: PropTypes.bool,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  isVisible: true,
  isHovered: false,
  onClick: null,
};

export default Card;