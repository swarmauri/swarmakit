import React, { useState } from 'react';
import './SplitView.css';

interface SplitViewProps {
  state: 'visible' | 'hidden' | 'resized' | 'collapsed';
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const SplitView: React.FC<SplitViewProps> = ({ state, leftContent, rightContent }) => {
  const [size, setSize] = useState(50);

  const handleResize = (newSize: number) => {
    setSize(newSize);
  };

  return (
    <div className={`split-view ${state}`}>
      <div className="left-pane" style={{ flexBasis: `${size}%` }}>
        {leftContent}
      </div>
      <div className="right-pane" style={{ flexBasis: `${100 - size}%` }}>
        {rightContent}
      </div>
      {state === 'resized' && (
        <div
          className="resizer"
          role="separator"
          aria-orientation="vertical"
          aria-label="Resize"
          onMouseDown={(e) => {
            e.preventDefault();
            const initialX = e.clientX;
            const initialSize = size;

            const onMouseMove = (e: MouseEvent) => {
              const newSize = initialSize + (e.clientX - initialX) * 100 / window.innerWidth;
              handleResize(Math.max(0, Math.min(100, newSize)));
            };

            const onMouseUp = () => {
              window.removeEventListener('mousemove', onMouseMove);
              window.removeEventListener('mouseup', onMouseUp);
            };

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
          }}
        />
      )}
    </div>
  );
};

export default SplitView;