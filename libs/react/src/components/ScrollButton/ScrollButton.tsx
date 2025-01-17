import React from 'react';

interface ScrollButtonProps {
  state: 'visible' | 'hidden' | 'hovered' | 'clicked';
  onClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ state, onClick }) => {
  return (
    <button 
      className={`scroll-button ${state}`} 
      aria-hidden={state === 'hidden'} 
      aria-label={`Scroll button is ${state}`}
      onClick={onClick}>
      Scroll
    </button>
  );
};

export default ScrollButton;