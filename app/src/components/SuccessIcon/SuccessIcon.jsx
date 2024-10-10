import React from 'react';
import PropTypes from 'prop-types';
import './SuccessIcon.css';

const SuccessIcon = ({ message }) => (
  <div className="success-icon-container">
    <span className="success-icon">&#10003;</span>
    {message && <span className="success-message">{message}</span>}
  </div>
);

SuccessIcon.propTypes = {
  message: PropTypes.string,
};

SuccessIcon.defaultProps = {
  message: '',
};

export default SuccessIcon;