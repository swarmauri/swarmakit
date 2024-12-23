import React from 'react';

interface LoadingSpinnerProps {
  active: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ active }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`loading-spinner ${active ? 'active' : 'inactive'}`}
    >
      {active && (
        <svg
          className="spinner"
          viewBox="0 0 50 50"
          aria-hidden="true"
          focusable="false"
        >
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          />
        </svg>
      )}
    </div>
  );
};

export default LoadingSpinner;