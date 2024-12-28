import React from 'react';
import './Container.css';

interface ContainerProps {
  state: 'fluid' | 'fixed' | 'centered' | 'fullWidth';
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ state, children }) => {
  return (
    <div className={`container ${state}`} role="presentation">
      {children}
    </div>
  );
};

export default Container;