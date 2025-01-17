import React, { useState } from 'react';

interface SortableListProps {
  items: string[];
  disabled?: boolean;
}

const SortableList: React.FC<SortableListProps> = ({ items, disabled = false }) => {
  const [list, setList] = useState(items);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  const handleDragEnter = (index: number) => {
    if (draggingIndex !== null && draggingIndex !== index) {
      const newList = [...list];
      const [removed] = newList.splice(draggingIndex, 1);
      newList.splice(index, 0, removed);
      setDraggingIndex(index);
      setList(newList);
    }
  };

  const handleDrop = () => {
    setDraggingIndex(null);
  };

  return (
    <ul className={`sortable-list ${disabled ? 'disabled' : ''}`} aria-disabled={disabled}>
      {list.map((item, index) => (
        <li
          key={index}
          draggable={!disabled}
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragEnd={handleDrop}
          className={draggingIndex === index ? 'dragging' : ''}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default SortableList;