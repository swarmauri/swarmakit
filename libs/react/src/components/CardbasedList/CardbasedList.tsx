import React from 'react';

interface CardItem {
  id: number;
  title: string;
  description: string;
  disabled?: boolean;
  selected?: boolean;
}

interface CardbasedListProps {
  items: CardItem[];
  onSelect: (id: number) => void;
}

const CardbasedList: React.FC<CardbasedListProps> = ({ items, onSelect }) => {
  return (
    <div className="cardbased-list">
      {items.map((item) => (
        <div
          key={item.id}
          className={`card-item ${item.disabled ? 'disabled' : ''} ${item.selected ? 'selected' : ''}`}
          onClick={() => !item.disabled && onSelect(item.id)}
          aria-disabled={item.disabled}
          role="button"
          tabIndex={0}
        >
          <h3 className="card-title">{item.title}</h3>
          <p className="card-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardbasedList;