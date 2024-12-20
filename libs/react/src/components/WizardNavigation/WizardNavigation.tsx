import React from 'react';

interface Step {
  label: string;
  isCompleted?: boolean;
  isCurrent?: boolean;
  isDisabled?: boolean;
}

interface WizardNavigationProps {
  steps: Step[];
  onStepClick: (index: number) => void;
}

const WizardNavigation: React.FC<WizardNavigationProps> = ({ steps, onStepClick }) => {
  return (
    <nav aria-label="Wizard Navigation" className="wizard-navigation">
      <ol className="step-list">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step-item ${step.isCompleted ? 'completed' : ''} ${step.isCurrent ? 'current' : ''} ${step.isDisabled ? 'disabled' : ''}`}
          >
            <button
              onClick={() => !step.isDisabled && onStepClick(index)}
              disabled={step.isDisabled}
              aria-disabled={step.isDisabled}
              className="step-button"
            >
              {step.label}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default WizardNavigation;