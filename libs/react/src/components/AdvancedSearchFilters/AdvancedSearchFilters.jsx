import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AdvancedSearchFilters.css';

const AdvancedSearchFilters = ({ filters, onApplyFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const applyFilters = () => {
    onApplyFilters(selectedFilters);
  };

  return (
    <div className="advanced-search-filters">
      {filters.map((filter) => (
        <div key={filter.name} className="filter-item">
          <label>{filter.label}</label>
          <select
            value={selectedFilters[filter.name] || ''}
            onChange={(e) => handleFilterChange(filter.name, e.target.value)}
          >
            <option value="">Select {filter.label}</option>
            {filter.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

AdvancedSearchFilters.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  onApplyFilters: PropTypes.func.isRequired,
};

export default AdvancedSearchFilters;