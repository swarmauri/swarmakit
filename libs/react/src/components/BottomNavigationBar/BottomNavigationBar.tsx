import React from 'react';

interface BottomNavigationBarProps {
  items: { label: string; icon: React.ReactNode; disabled?: boolean }[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({ items, selectedIndex, onSelect }) => {
  return (
    <nav className="bottom-navigation-bar" role="navigation" aria-label="Bottom navigation">
      <ul>
        {items.map((item, index) => (
          <li key={index} className={`nav-item ${selectedIndex === index ? 'selected' : ''} ${item.disabled ? 'disabled' : ''}`}>
            <button
              onClick={() => !item.disabled && onSelect(index)}
              disabled={item.disabled}
              aria-pressed={selectedIndex === index}
              aria-disabled={item.disabled}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigationBar;