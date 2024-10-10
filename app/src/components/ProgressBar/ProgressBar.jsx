import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ progress, height, color, backgroundColor }) => (
  <div className="progress-bar-container" style={{ height, backgroundColor }}>
    <div
      className="progress-bar"
      style={{
        width: `${progress}%`,
        backgroundColor: color,
      }}
    />
  </div>
);

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

ProgressBar.defaultProps = {
  height: '20px',
  color: '#4caf50', // Default to green
  backgroundColor: '#e0e0e0', // Default to light gray
};

export default ProgressBar;