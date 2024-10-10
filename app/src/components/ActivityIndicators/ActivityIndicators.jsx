import React from 'react';
import PropTypes from 'prop-types';
import './ActivityIndicators.css';

const ActivityIndicators = ({ status }) => {
  return (
    <div className={`activity-indicator ${status}`}>
      {status === 'loading' && <div className="spinner" />}
      {status === 'success' && <span className="success-icon">✔</span>}
      {status === 'error' && <span className="error-icon">✖</span>}
    </div>
  );
};

ActivityIndicators.propTypes = {
  status: PropTypes.oneOf(['loading', 'success', 'error']).isRequired,
};

ActivityIndicators.defaultProps = {
  status: 'loading',
};

export default ActivityIndicators;