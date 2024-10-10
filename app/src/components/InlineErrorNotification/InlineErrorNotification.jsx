/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import './InlineErrorNotification.css';

const InlineErrorNotification = ({ message, isVisible }) => {
  return (
    isVisible && (
      <div className="inline-error-notification">
        {message}
      </div>
    )
  );
};

InlineErrorNotification.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool
};

InlineErrorNotification.defaultProps = {
  isVisible: false
};

export default InlineErrorNotification;