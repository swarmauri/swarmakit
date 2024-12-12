import React from 'react';

interface BadgeProps {
  state: 'default' | 'notification' | 'status-indicator';
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ state, label }) => {
  return (
    <span className={`badge ${state}`} aria-label={label}>
      {label}
    </span>
  );
};

export default Badge;