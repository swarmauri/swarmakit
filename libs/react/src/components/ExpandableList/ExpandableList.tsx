import React, { useState } from 'react';

interface ListItem {
  id: number;
  title: string;
  content: string;
}

interface ExpandableListProps {
  items: ListItem[];
}

const ExpandableList: React.FC<ExpandableListProps> = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleExpand = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const handleSelect = (id: number) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  return (
    <ul className="expandable-list">
      {items.map((item) => (
        <li
          key={item.id}
          className={`list-item ${expandedItem === item.id ? 'expanded' : ''} ${
            selectedItem === item.id ? 'selected' : ''
          }`}
          onClick={() => handleSelect(item.id)}
          onMouseEnter={() => handleExpand(item.id)}
        >
          <div className="item-title">{item.title}</div>
          {expandedItem === item.id && <div className="item-content">{item.content}</div>}
        </li>
      ))}
    </ul>
  );
};

export default ExpandableList;