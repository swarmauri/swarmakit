import React from 'react';
import PropTypes from 'prop-types';
import './ErrorWarningIcon.css';

const ErrorWarningIcon = ({ type, message }) => (
  <div className={`icon-container ${type}`}>
    <span className={`icon ${type}`}></span>
    {message && <span className="message">{message}</span>}
  </div>
);

ErrorWarningIcon.propTypes = {
  type: PropTypes.oneOf(['error', 'warning']).isRequired,
  message: PropTypes.string,
};

ErrorWarningIcon.defaultProps = {
  message: '',
};

export default ErrorWarningIcon;