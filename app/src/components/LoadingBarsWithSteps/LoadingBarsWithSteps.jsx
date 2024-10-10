import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Step = styled.div`
  flex: 1;
  height: 10px;
  background-color: ${({ active, completed }) => 
    completed ? '#2ecc71' : active ? '#3498db' : '#bdc3c7'};
  transition: background-color 0.3s ease;

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const LoadingBarsWithSteps = ({ steps, activeStep }) => {
  return (
    <StepContainer>
      {steps.map((step, index) => (
        <Step 
          key={index} 
          active={index === activeStep} 
          completed={index < activeStep} 
        />
      ))}
    </StepContainer>
  );
};

LoadingBarsWithSteps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeStep: PropTypes.number.isRequired,
};

export default LoadingBarsWithSteps;