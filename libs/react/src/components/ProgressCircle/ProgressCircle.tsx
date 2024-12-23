import React from 'react';

interface ProgressCircleProps {
  progress: number;
  status?: 'complete' | 'incomplete' | 'in-progress' | 'paused' | 'active';
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ progress, status }) => {
  const strokeDasharray = `${progress} ${100 - progress}`;
  
  return (
    <svg className={`progress-circle ${status}`} viewBox="0 0 36 36" role="img" aria-label={`Progress: ${progress}%`}>
      <circle
        className="progress-circle-bg"
        cx="18"
        cy="18"
        r="16"
        fill="none"
        strokeWidth="4"
      />
      <circle
        className="progress-circle-fill"
        cx="18"
        cy="18"
        r="16"
        fill="none"
        strokeWidth="4"
        strokeDasharray={strokeDasharray}
        transform="rotate(-90 18 18)"
      />
    </svg>
  );
};

export default ProgressCircle;