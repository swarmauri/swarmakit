import React, { useState } from 'react';

interface ScrollableListItem {
  id: string;
  content: string;
}

interface ScrollableListProps {
  items: ScrollableListItem[];
  disabled: boolean;
}

const ScrollableList: React.FC<ScrollableListProps> = ({ items, disabled }) => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const handleScroll = (event: React.UIEvent<HTMLUListElement>) => {
    setIsScrolling(true);
    const target = event.currentTarget;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      console.log('End of List');
    }
    setTimeout(() => setIsScrolling(false), 300);
  };

  return (
    <ul
      className={`scrollable-list ${disabled ? 'disabled' : ''} ${isScrolling ? 'scrolling' : ''}`}
      onScroll={handleScroll}
      aria-disabled={disabled}
    >
      {items.map(item => (
        <li key={item.id} className="list-item">
          {item.content}
        </li>
      ))}
    </ul>
  );
};

export default ScrollableList;