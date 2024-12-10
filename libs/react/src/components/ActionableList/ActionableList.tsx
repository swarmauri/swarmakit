import React from 'react';

interface ActionableListItem {
  id: number;
  text: string;
  actionLabel: string;
  disabled?: boolean;
}

interface ActionableListProps {
  items: ActionableListItem[];
  onAction: (id: number) => void;
  isLoading?: boolean;
}

const ActionableList: React.FC<ActionableListProps> = ({ items, onAction, isLoading = false }) => {
  return (
    <ul className="actionable-list">
      {items.map((item) => (
        <li key={item.id} className={`actionable-list-item ${item.disabled ? 'disabled' : ''}`}>
          <span className="item-text">{item.text}</span>
          <button
            className="item-action"
            onClick={() => onAction(item.id)}
            disabled={item.disabled || isLoading}
            aria-disabled={item.disabled || isLoading}
          >
            {isLoading ? 'Loading...' : item.actionLabel}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ActionableList;