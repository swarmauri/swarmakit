import React, { useState } from 'react';

interface PopoverProps {
  content: string;
  children: React.ReactNode;
  initiallyVisible?: boolean;
}

const Popover: React.FC<PopoverProps> = ({ content, children, initiallyVisible = false }) => {
  const [visible, setVisible] = useState(initiallyVisible);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="popover-container">
      <div onClick={toggleVisibility} className="popover-trigger" aria-haspopup="true" aria-expanded={visible}>
        {children}
      </div>
      {visible && (
        <div className="popover-content" role="tooltip">
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;