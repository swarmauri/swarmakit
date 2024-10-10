import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CircleContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: #e0e0e0;
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke: ${({ isComplete, isPaused, isActive }) =>
    isComplete ? '#4caf50' : isPaused ? '#ff9800' : isActive ? '#2196f3' : '#757575'};
  stroke-linecap: round;
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const ProgressCircle = ({ progress, isComplete, isPaused, isActive }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <CircleContainer>
      <svg width="100" height="100">
        <CircleBackground r={radius} cx="50" cy="50" strokeWidth="10" />
        <CircleProgress
          r={radius}
          cx="50"
          cy="50"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          isComplete={isComplete}
          isPaused={isPaused}
          isActive={isActive}
        />
      </svg>
    </CircleContainer>
  );
};

ProgressCircle.propTypes = {
  progress: PropTypes.number.isRequired,
  isComplete: PropTypes.bool,
  isPaused: PropTypes.bool,
  isActive: PropTypes.bool,
};

ProgressCircle.defaultProps = {
  isComplete: false,
  isPaused: false,
  isActive: false,
};

export default ProgressCircle;