import React from 'react';

interface Step {
  id: number;
  label: string;
  status: 'Active' | 'Completed' | 'Inactive';
}

interface LoadingBarsWithStepsProps {
  steps: Step[];
}

const LoadingBarsWithSteps: React.FC<LoadingBarsWithStepsProps> = ({ steps }) => {
  return (
    <div className="loading-bars" aria-label="Loading steps">
      {steps.map((step) => (
        <div key={step.id} className={`loading-step ${step.status.toLowerCase()}`}>
          <span className="step-label">{step.label}</span>
          <div className="step-bar">
            <div className={`bar-fill ${step.status.toLowerCase()}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingBarsWithSteps;