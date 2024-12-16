import React, { useState } from 'react';

interface NavItem {
  label: string;
  onClick: () => void;
}

interface ScrollableHorizontalNavigationProps {
  items: NavItem[];
}

const ScrollableHorizontalNavigation: React.FC<ScrollableHorizontalNavigationProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <nav className="scrollable-horizontal-navigation" aria-label="Scrollable Horizontal Navigation">
      <ul className="nav-items">
        {items.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <button onClick={item.onClick}>{item.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ScrollableHorizontalNavigation;