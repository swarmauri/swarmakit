import React from 'react';

interface ThreadContainerProps {
  state: 'open' | 'closed' | 'expanded' | 'collapsed';
  threadTitle: string;
  threadContent: string;
  onToggle: () => void;
}

const ThreadContainer: React.FC<ThreadContainerProps> = ({ state, threadTitle, threadContent, onToggle }) => {
  const isCollapsed = state === 'collapsed';

  return (
    <div
      className={`thread-container ${state}`}
      role="region"
      aria-expanded={state === 'expanded'}
      aria-label={state === 'open' ? 'Open thread' : 'Closed thread'}
    >
      <h2>{threadTitle}</h2>
      {!isCollapsed && <p>{threadContent}</p>}
      <button onClick={onToggle} aria-pressed={state === 'expanded'}>
        {state === 'expanded' ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
};

export default ThreadContainer;