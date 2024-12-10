import React, { useState } from 'react';

interface FilterOption {
  label: string;
  value: string;
}

interface SearchInputWithFilterOptionsProps {
  disabled?: boolean;
  filterOptions?: FilterOption[];
  onSearch?: (query: string) => void;
  onFilterChange?: (selectedFilters: string[]) => void;
}

const SearchInputWithFilterOptions: React.FC<SearchInputWithFilterOptionsProps> = ({
  disabled = false,
  filterOptions = [],
  onSearch,
  onFilterChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleFilterChange = (filterValue: string) => {
    const updatedFilters = selectedFilters.includes(filterValue)
      ? selectedFilters.filter((value) => value !== filterValue)
      : [...selectedFilters, filterValue];

    setSelectedFilters(updatedFilters);
    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }
  };

  return (
    <div className={`search-input-with-filter-options ${disabled ? 'disabled' : ''}`}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        disabled={disabled}
        aria-disabled={disabled}
        placeholder="Search..."
      />
      <div className="filter-options">
        {filterOptions.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              checked={selectedFilters.includes(option.value)}
              onChange={() => handleFilterChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SearchInputWithFilterOptions;