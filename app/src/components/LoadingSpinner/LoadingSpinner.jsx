import React from 'react';
import PropTypes from 'prop-types';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size, color }) => (
  <div
    className="loading-spinner"
    style={{
      width: size,
      height: size,
      borderColor: `${color} transparent transparent transparent`,
    }}
  />
);

LoadingSpinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  size: '40px',
  color: '#000', // Default to black
};

export default LoadingSpinner;