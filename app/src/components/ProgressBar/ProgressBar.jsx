import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ progress, disabled }) => {
  return (
    <div className={`progress-bar ${disabled ? 'disabled' : ''}`}>
      <div 
        className="progress-fill" 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
};

ProgressBar.defaultProps = {
  disabled: false,
};

export default ProgressBar;