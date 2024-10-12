import React from 'react';
import PropTypes from 'prop-types';
import './ValidationMessages.css';

const ValidationMessages = ({ message, type }) => {
  return (
    <div className={`validation-message ${type}`}>
      {message}
    </div>
  );
};

ValidationMessages.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning']),
};

ValidationMessages.defaultProps = {
  type: 'success',
};

export default ValidationMessages;