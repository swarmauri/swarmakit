import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  initiallyVisible?: boolean;
  type?: 'default' | 'error' | 'information';
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, initiallyVisible = false, type = 'default' }) => {
  const [visible, setVisible] = useState(initiallyVisible);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const getTooltipClass = () => {
    switch (type) {
      case 'error':
        return 'tooltip-content-error';
      case 'information':
        return 'tooltip-content-information';
      default:
        return 'tooltip-content-default';
    }
  };

  return (
    <div className="tooltip-container">
      <div onClick={toggleVisibility} className="tooltip-trigger" aria-haspopup="true" aria-expanded={visible}>
        {children}
      </div>
      {visible && (
        <div className={`tooltip-content ${getTooltipClass()}`} role="tooltip">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;