import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

const Badge = ({ content, type }) => {
  return (
    <span className={`badge ${type}`}>
      {content}
    </span>
  );
};

Badge.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'notification', 'status']).isRequired,
};

Badge.defaultProps = {
  type: 'default',
};

export default Badge;