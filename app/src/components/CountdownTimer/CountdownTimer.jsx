import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  background-color: #f3f3f3;
  padding: 10px;
  border-radius: 5px;
  width: 100px;
`;

const CountdownTimer = ({ initialTime, isRunning }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  return <TimerContainer>{time}s</TimerContainer>;
};

CountdownTimer.propTypes = {
  initialTime: PropTypes.number.isRequired,
  isRunning: PropTypes.bool,
};

CountdownTimer.defaultProps = {
  isRunning: false,
};

export default CountdownTimer;