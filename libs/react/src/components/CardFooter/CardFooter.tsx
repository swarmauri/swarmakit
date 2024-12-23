import React from 'react';
import './CardFooter.css';

interface CardFooterProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const CardFooter: React.FC<CardFooterProps> = ({ children, align = 'left' }) => {
  return (
    <div className={`card-footer align-${align}`}>
      {children}
    </div>
  );
};

export default CardFooter;