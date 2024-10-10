import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  height: 10px;
`;

const Progress = styled.div`
  height: 100%;
  background-color: ${({ isComplete, isDisabled }) =>
    isDisabled ? '#c0c0c0' : isComplete ? '#4caf50' : '#2196f3'};
  width: ${({ progress }) => progress}%;
  transition: width 0.3s;
`;

const ProgressBar = ({ progress, isComplete, isDisabled }) => {
  return (
    <ProgressBarContainer>
      <Progress progress={progress} isComplete={isComplete} isDisabled={isDisabled} />
    </ProgressBarContainer>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  isComplete: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

ProgressBar.defaultProps = {
  isComplete: false,
  isDisabled: false,
};

export default ProgressBar;