import React from 'react';

interface ProgressBarProps {
  progress: number;
  disabled?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, disabled }) => {
  return (
    <div
      className={`progress-bar ${disabled ? 'disabled' : ''}`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-disabled={disabled}
    >
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;