import React from 'react';

interface StepperProps {
  steps: number;
  currentStep: number;
  status: 'completed' | 'active' | 'disabled';
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, status }) => {
  return (
    <div className="stepper" aria-label={`Stepper: ${status}`}>
      {Array.from({ length: steps }, (_, index) => (
        <span
          key={index}
          className={`step ${index < currentStep ? 'completed' : index === currentStep ? 'active' : 'disabled'}`}
        ></span>
      ))}
    </div>
  );
};

export default Stepper;