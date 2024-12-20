import React, { useState } from 'react';
import './EventFilterBar.css';

interface FilterOptions {
  category: string;
  dateRange: string;
  location: string;
  participants: number;
}

const EventFilterBar: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    dateRange: '',
    location: '',
    participants: 0,
  });

  const handleFilterChange = (field: keyof FilterOptions, value: string | number) => {
    setFilters({ ...filters, [field]: value });
    // Update calendar view based on filters
  };

  const handleResetFilters = () => {
    setFilters({ category: '', dateRange: '', location: '', participants: 0 });
    // Reset calendar view
  };

  return (
    <div className="event-filter-bar">
      <select
        value={filters.category}
        onChange={(e) => handleFilterChange('category', e.target.value)}
        aria-label="Event Category"
      >
        <option value="">All Categories</option>
        {/* Categories should be dynamically loaded */}
      </select>
      <input
        type="text"
        placeholder="Date Range"
        value={filters.dateRange}
        onChange={(e) => handleFilterChange('dateRange', e.target.value)}
        aria-label="Date Range"
      />
      <input
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={(e) => handleFilterChange('location', e.target.value)}
        aria-label="Location"
      />
      <input
        type="number"
        placeholder="Participants"
        value={filters.participants}
        onChange={(e) => handleFilterChange('participants', Number(e.target.value))}
        aria-label="Participants"
      />
      <button onClick={handleResetFilters}>Reset Filters</button>
    </div>
  );
};

export default EventFilterBar;