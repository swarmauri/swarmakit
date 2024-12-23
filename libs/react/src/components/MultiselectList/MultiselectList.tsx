import React, { useState } from 'react';

interface MultiselectListProps {
  items: string[];
  disabled?: boolean;
}

const MultiselectList: React.FC<MultiselectListProps> = ({ items, disabled = false }) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const toggleItemSelection = (item: string) => {
    if (disabled) return;
    setSelectedItems((prev) => {
      const newSelectedItems = new Set(prev);
      if (newSelectedItems.has(item)) {
        newSelectedItems.delete(item);
      } else {
        newSelectedItems.add(item);
      }
      return newSelectedItems;
    });
  };

  return (
    <ul className="multiselect-list" aria-disabled={disabled}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`list-item ${selectedItems.has(item) ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
          onClick={() => toggleItemSelection(item)}
          aria-selected={selectedItems.has(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default MultiselectList;