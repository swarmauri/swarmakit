import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  font-size: 2rem;
  color: ${({ isSelected, isHovered, isInactive }) =>
    isInactive ? '#d3d3d3' : isSelected || isHovered ? '#ff9800' : '#757575'};
  cursor: ${({ isInactive }) => (isInactive ? 'default' : 'pointer')};
  transition: color 0.2s;
`;

const RatingStars = ({ totalStars, initialRating, isInactive }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverIndex, setHoverIndex] = useState(undefined);

  const handleMouseEnter = (index) => {
    if (!isInactive) setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    if (!isInactive) setHoverIndex(undefined);
  };

  const handleClick = (index) => {
    if (!isInactive) setRating(index + 1);
  };

  return (
    <StarsContainer>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          isSelected={index < rating}
          isHovered={index <= hoverIndex}
          isInactive={isInactive}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          ★
        </Star>
      ))}
    </StarsContainer>
  );
};

RatingStars.propTypes = {
  totalStars: PropTypes.number,
  initialRating: PropTypes.number,
  isInactive: PropTypes.bool,
};

RatingStars.defaultProps = {
  totalStars: 5,
  initialRating: 0,
  isInactive: false,
};

export default RatingStars;