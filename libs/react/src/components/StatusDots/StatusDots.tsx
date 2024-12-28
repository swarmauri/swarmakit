import React from 'react';

interface StatusDotsProps {
  status: 'online' | 'offline' | 'busy' | 'idle';
}

const StatusDots: React.FC<StatusDotsProps> = ({ status }) => {
  return (
    <div className="status-dots" aria-label={`Status: ${status}`}>
      <span className={`status-dot ${status}`}></span>
    </div>
  );
};

export default StatusDots;