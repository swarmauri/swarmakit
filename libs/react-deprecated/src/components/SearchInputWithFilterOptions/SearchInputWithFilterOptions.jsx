import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchInputWithFilterOptions.css';

const SearchInputWithFilterOptions = ({ filters, onSearch, disabled }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value, activeFilters);
  };

  const toggleFilter = (filter) => {
    const newFilters = activeFilters.includes(filter)
      ? activeFilters.filter((f) => f !== filter)
      : [...activeFilters, filter];
    setActiveFilters(newFilters);
    onSearch(searchTerm, newFilters);
  };

  return (
    <div className={`search-input-with-filters ${disabled ? 'disabled' : ''}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
        disabled={disabled}
      />
      <div className="filter-options">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={activeFilters.includes(filter) ? 'active' : ''}
            disabled={disabled}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

SearchInputWithFilterOptions.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onSearch: PropTypes.func,
  disabled: PropTypes.bool,
};

SearchInputWithFilterOptions.defaultProps = {
  filters: [],
  onSearch: () => {},
  disabled: false,
};

export default SearchInputWithFilterOptions;