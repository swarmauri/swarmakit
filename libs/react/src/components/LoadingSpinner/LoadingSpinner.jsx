import React from 'react';
import PropTypes from 'prop-types';
import './LoadingSpinner.css';

const LoadingSpinner = ({ active }) => {
  return (
    <div className={`loading-spinner ${active ? 'active' : 'inactive'}`}>
      <div className="spinner" />
    </div>
  );
};

LoadingSpinner.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default LoadingSpinner;