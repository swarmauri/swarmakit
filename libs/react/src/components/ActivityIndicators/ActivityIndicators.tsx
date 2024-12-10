import React from 'react';

interface ActivityIndicatorsProps {
  state: 'loading' | 'success' | 'error';
}

const ActivityIndicators: React.FC<ActivityIndicatorsProps> = ({ state }) => {
  return (
    <div className={`activity-indicator ${state}`} role="status" aria-live="polite">
      {state === 'loading' && <span>Loading...</span>}
      {state === 'success' && <span>Success!</span>}
      {state === 'error' && <span>Error!</span>}
    </div>
  );
};

export default ActivityIndicators;