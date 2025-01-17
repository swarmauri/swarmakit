import React from 'react';

interface PinnedListItem {
  id: string;
  content: string;
  pinned: boolean;
}

interface PinnedListProps {
  items: PinnedListItem[];
  onPinToggle: (id: string) => void;
  onSelect: (id: string) => void;
  selectedItemId: string | null;
}

const PinnedList: React.FC<PinnedListProps> = ({ items, onPinToggle, onSelect, selectedItemId }) => {
  return (
    <ul className="pinned-list">
      {items.map(item => (
        <li
          key={item.id}
          className={`list-item ${item.pinned ? 'pinned' : 'unpinned'} ${selectedItemId === item.id ? 'selected' : ''}`}
          onClick={() => onSelect(item.id)}
          aria-selected={selectedItemId === item.id}
        >
          <span>{item.content}</span>
          <button onClick={() => onPinToggle(item.id)} aria-label={`Toggle pin for ${item.content}`}>
            {item.pinned ? 'Unpin' : 'Pin'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PinnedList;