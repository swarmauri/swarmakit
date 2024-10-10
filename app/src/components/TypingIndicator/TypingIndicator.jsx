// TypingIndicator.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './TypingIndicator.css';

const TypingIndicator = ({ state }) => {
  return (
    <div className={`typing-indicator ${state}`}>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
};

TypingIndicator.propTypes = {
  state: PropTypes.oneOf(['visible', 'hidden', 'typing']).isRequired,
};

export default TypingIndicator;