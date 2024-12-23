import React, { useState } from 'react';

interface ListItem {
  id: number;
  name: string;
}

interface FilterableListProps {
  items: ListItem[];
}

const FilterableList: React.FC<FilterableListProps> = ({ items }) => {
  const [filter, setFilter] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<ListItem[]>(items);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilter(value);
    setFilteredItems(
      items.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const clearFilter = () => {
    setFilter('');
    setFilteredItems(items);
  };

  return (
    <div className="filterable-list">
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter items..."
        aria-label="Filter items"
      />
      <button onClick={clearFilter} aria-label="Clear filter">Clear Filter</button>
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default FilterableList;