import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  initialTime: number;
  autoStart: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialTime, autoStart }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  const getStatus = () => {
    if (timeLeft === 0) return 'Completed';
    return isRunning ? 'Running' : 'Paused';
  };

  return (
    <div className="countdown-timer" aria-label={`Timer status: ${getStatus()}`}>
      <div className="timer-display">{timeLeft}s</div>
      {!autoStart && (
        <div className="timer-controls">
          <button onClick={startTimer} disabled={isRunning}>Start</button>
          <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;