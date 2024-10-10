import React from 'react';
import PropTypes from 'prop-types';
import './Stepper.css';

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        let statusClass = 'step';
        if (index < currentStep) {
          statusClass += ' completed';
        } else if (index === currentStep) {
          statusClass += ' active';
        } else {
          statusClass += ' disabled';
        }

        return (
          <div key={index} className={statusClass}>
            {step}
          </div>
        );
      })}
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number,
};

Stepper.defaultProps = {
  currentStep: 0,
};

export default Stepper;