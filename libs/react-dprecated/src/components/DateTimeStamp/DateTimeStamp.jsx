// DateTimeStamp.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './DateTimeStamp.css';

const DateTimeStamp = ({ state, timestamp }) => {
  if (state === 'hidden') return null;
  return <div className="date-time-stamp">{timestamp}</div>;
};

DateTimeStamp.propTypes = {
  state: PropTypes.oneOf(['displayed', 'hidden']).isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default DateTimeStamp;