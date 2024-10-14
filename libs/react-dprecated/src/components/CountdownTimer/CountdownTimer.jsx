import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CountdownTimer.css';

const CountdownTimer = ({ initialTime, isPaused }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (isPaused || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, timeLeft]);

  return (
    <div className={`countdown-timer ${timeLeft === 0 ? 'completed' : ''}`}>
      {timeLeft}s
    </div>
  );
};

CountdownTimer.propTypes = {
  initialTime: PropTypes.number.isRequired,
  isPaused: PropTypes.bool,
};

CountdownTimer.defaultProps = {
  isPaused: false,
};

export default CountdownTimer;