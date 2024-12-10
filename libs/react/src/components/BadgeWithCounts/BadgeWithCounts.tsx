import React from 'react';

interface BadgeWithCountsProps {
  count: number;
  maxCount?: number;
}

const BadgeWithCounts: React.FC<BadgeWithCountsProps> = ({ count, maxCount = 99 }) => {
  const displayCount = count > maxCount ? `${maxCount}+` : count;

  return (
    <span className="badge-with-counts" aria-label={`Badge count: ${displayCount}`}>
      {displayCount}
    </span>
  );
};

export default BadgeWithCounts;