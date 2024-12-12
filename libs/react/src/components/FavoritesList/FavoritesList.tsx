import React, { useState } from 'react';

interface FavoriteItem {
  id: number;
  title: string;
  starred: boolean;
}

interface FavoritesListProps {
  items: FavoriteItem[];
}

const FavoritesList: React.FC<FavoritesListProps> = ({ items }) => {
  const [starredItems, setStarredItems] = useState<Set<number>>(new Set());
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const toggleStar = (id: number) => {
    setStarredItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleSelect = (id: number) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  return (
    <ul className="favorites-list">
      {items.map((item) => (
        <li
          key={item.id}
          className={`list-item ${starredItems.has(item.id) ? 'starred' : ''} ${
            selectedItem === item.id ? 'selected' : ''
          }`}
          onClick={() => handleSelect(item.id)}
          onMouseEnter={() => toggleStar(item.id)}
        >
          <div className="item-title">{item.title}</div>
          <div className="item-star">{starredItems.has(item.id) ? '★' : '☆'}</div>
        </li>
      ))}
    </ul>
  );
};

export default FavoritesList;