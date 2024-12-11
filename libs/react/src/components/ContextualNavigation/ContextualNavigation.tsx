import React, { useState } from 'react';

interface NavigationItem {
  label: string;
  onClick: () => void;
}

interface ContextualNavigationProps {
  items: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
}

const ContextualNavigation: React.FC<ContextualNavigationProps> = ({ items, isOpen, onClose }) => {
  return (
    <div className={`contextual-navigation ${isOpen ? 'open' : 'closed'}`} role="dialog" aria-hidden={!isOpen}>
      <button className="close-btn" onClick={onClose} aria-label="Close Navigation">
        &times;
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="navigation-item">
            <button onClick={item.onClick}>{item.label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextualNavigation;