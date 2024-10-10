import React from 'react';
import PropTypes from 'prop-types';
import './LoadingBarsWithSteps.css';

const LoadingBarsWithSteps = ({ steps, currentStep }) => {
  return (
    <div className="loading-steps">
      {steps.map((step, index) => {
        const stepStatus = index < currentStep ? 'completed' : index === currentStep ? 'active' : 'inactive';
        return (
          <div key={index} className={`step ${stepStatus}`}>
            <div className="step-label">{step.label}</div>
            <div className="step-bar" />
          </div>
        );
      })}
    </div>
  );
};

LoadingBarsWithSteps.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default LoadingBarsWithSteps;