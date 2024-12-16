import React from 'react';

interface CheckItem {
  id: number;
  label: string;
  checked: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
}

interface CheckListProps {
  items: CheckItem[];
  onToggle: (id: number) => void;
}

const CheckList: React.FC<CheckListProps> = ({ items, onToggle }) => {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item.id} className={`check-item ${item.disabled ? 'disabled' : ''}`}>
          <input
            type="checkbox"
            id={`check-${item.id}`}
            checked={item.checked}
            onChange={() => !item.disabled && onToggle(item.id)}
            disabled={item.disabled}
            aria-checked={item.indeterminate ? 'mixed' : item.checked}
            ref={(el) => {
              if (el) el.indeterminate = item.indeterminate || false;
            }}
          />
          <label htmlFor={`check-${item.id}`}>{item.label}</label>
        </li>
      ))}
    </ul>
  );
};

export default CheckList;