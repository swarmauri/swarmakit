// TypingStatus.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './TypingStatus.css';

const TypingStatus = ({ state, message }) => {
  if (state === 'hidden') return null;
  return (
    <div className={`typing-status ${state}`}>
      {state === 'typing' && <span>{message}</span>}
    </div>
  );
};

TypingStatus.propTypes = {
  state: PropTypes.oneOf(['visible', 'hidden', 'typing', 'paused']).isRequired,
  message: PropTypes.string,
};

export default TypingStatus;