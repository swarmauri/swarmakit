import React, { useState } from 'react';

interface SelectableListItem {
  id: string;
  title: string;
  details: string;
}

interface SelectableListWithItemDetailsProps {
  items: SelectableListItem[];
}

const SelectableListWithItemDetails: React.FC<SelectableListWithItemDetailsProps> = ({ items }) => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);

  const handleSelect = (id: string) => {
    setSelectedItemId(id);
    setDetailsOpen(!detailsOpen);
  };

  return (
    <div>
      <ul className="selectable-list">
        {items.map(item => (
          <li
            key={item.id}
            className={`list-item ${selectedItemId === item.id ? 'selected' : ''}`}
            onClick={() => handleSelect(item.id)}
            aria-expanded={detailsOpen && selectedItemId === item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
      {selectedItemId && detailsOpen && (
        <div className="details">
          {items.find(item => item.id === selectedItemId)?.details}
        </div>
      )}
    </div>
  );
};

export default SelectableListWithItemDetails;