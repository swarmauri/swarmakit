import React from 'react';
import PropTypes from 'prop-types';
import './SignalStrengthIndicator.css';

const SignalStrengthIndicator = ({ strength }) => {
  const getBarClass = (index) => {
    if (strength >= index + 1) {
      return 'bar filled';
    }
    return 'bar';
  };

  return (
    <div className="signal-strength-indicator">
      {[...Array(5)].map((_, index) => (
        <div key={index} className={getBarClass(index)} />
      ))}
    </div>
  );
};

SignalStrengthIndicator.propTypes = {
  strength: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
};

SignalStrengthIndicator.defaultProps = {
  strength: 0,
};

export default SignalStrengthIndicator;