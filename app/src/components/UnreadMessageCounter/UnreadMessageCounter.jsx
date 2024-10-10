// UnreadMessageCounter.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './UnreadMessageCounter.css';

const UnreadMessageCounter = ({ count }) => {
  return (
    <div className={`unread-message-counter ${count > 0 ? 'displayed' : 'hidden'}`}>
      {count > 0 && <span>{count}</span>}
    </div>
  );
};

UnreadMessageCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default UnreadMessageCounter;