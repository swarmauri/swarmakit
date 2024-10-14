import React from 'react';
import PropTypes from 'prop-types';
import './InlineErrorNotification.css';

const InlineErrorNotification = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="inline-error-notification">
      <p>{message}</p>
    </div>
  );
};

InlineErrorNotification.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default InlineErrorNotification;