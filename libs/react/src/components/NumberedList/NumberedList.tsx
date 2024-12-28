import React, { useState } from 'react';

interface NumberedListProps {
  items: string[];
  disabled?: boolean;
}

const NumberedList: React.FC<NumberedListProps> = ({ items, disabled = false }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    if (disabled) return;
    setSelectedItem(index === selectedItem ? null : index);
  };

  return (
    <ol className="numbered-list" aria-disabled={disabled}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`list-item ${selectedItem === index ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
          onClick={() => handleItemClick(index)}
          aria-selected={selectedItem === index}
        >
          {item}
        </li>
      ))}
    </ol>
  );
};

export default NumberedList;