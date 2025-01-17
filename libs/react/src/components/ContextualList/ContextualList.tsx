import React, { useState } from 'react';

interface ListItem {
  id: number;
  text: string;
}

interface ContextualListProps {
  items: ListItem[];
  onAction: (id: number) => void;
}

const ContextualList: React.FC<ContextualListProps> = ({ items, onAction }) => {
  const [dismissedItems, setDismissedItems] = useState<Set<number>>(new Set());

  const handleDismiss = (id: number) => {
    setDismissedItems((prev) => new Set(prev).add(id));
  };

  return (
    <ul className="contextual-list">
      {items.map((item) =>
        dismissedItems.has(item.id) ? null : (
          <li key={item.id} className="list-item">
            <span>{item.text}</span>
            <button onClick={() => onAction(item.id)} className="action-button">
              Action
            </button>
            <button onClick={() => handleDismiss(item.id)} className="dismiss-button">
              Dismiss
            </button>
          </li>
        )
      )}
    </ul>
  );
};

export default ContextualList;