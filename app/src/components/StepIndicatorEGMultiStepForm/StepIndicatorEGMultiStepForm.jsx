import React from 'react';
import PropTypes from 'prop-types';
import './StepIndicatorEGMultiStepForm.css';

const StepIndicatorEGMultiStepForm = ({ steps, currentStep, activeColor, inactiveColor }) => (
  <div className="step-indicator-container">
    {steps.map((step, index) => (
      <div
        key={index}
        className={`step ${index < currentStep ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}
        style={{
          backgroundColor: index <= currentStep ? activeColor : inactiveColor,
        }}
      >
        <span className="step-label">{step}</span>
      </div>
    ))}
  </div>
);

StepIndicatorEGMultiStepForm.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
};

StepIndicatorEGMultiStepForm.defaultProps = {
  activeColor: '#4caf50', // Default to green
  inactiveColor: '#e0e0e0', // Default to light gray
};

export default StepIndicatorEGMultiStepForm;