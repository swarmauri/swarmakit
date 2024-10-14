import React from 'react';
import PropTypes from 'prop-types';
import './WizardNavigation.css';

const WizardNavigation = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="wizard-navigation">
      {steps.map((step, index) => (
        <button
          key={index}
          className={`wizard-step ${index < currentStep ? 'completed' : ''} ${index === currentStep ? 'current' : ''} ${step.disabled ? 'disabled' : ''}`}
          onClick={() => !step.disabled && onStepClick(index)}
          disabled={step.disabled}
        >
          {step.label}
        </button>
      ))}
    </div>
  );
};

WizardNavigation.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
  onStepClick: PropTypes.func.isRequired,
};

export default WizardNavigation;