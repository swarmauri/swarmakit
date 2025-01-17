import React, { useState } from 'react';
import './DataFilterPanel.css';

interface FilterOption {
  type: 'text' | 'dropdown' | 'date';
  label: string;
  options?: string[];
}

interface DataFilterPanelProps {
  filters: FilterOption[];
  onApplyFilters: (activeFilters: Record<string, any>) => void;
  onClearFilters: () => void;
  disabled?: boolean;
}

const DataFilterPanel: React.FC<DataFilterPanelProps> = ({ filters, onApplyFilters, onClearFilters, disabled }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});

  const handleFilterChange = (key: string, value: any) => {
    setActiveFilters({
      ...activeFilters,
      [key]: value,
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(activeFilters);
  };

  return (
    <div className={`data-filter-panel ${isCollapsed ? 'collapsed' : ''} ${disabled ? 'disabled' : ''}`}>
      <button className="toggle-button" onClick={() => setIsCollapsed(!isCollapsed)} disabled={disabled}>
        {isCollapsed ? 'Expand' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div className="filters">
          {filters.map((filter) => (
            <div key={filter.label} className="filter-item">
              <label>{filter.label}</label>
              {filter.type === 'text' && (
                <input
                  type="text"
                  onChange={(e) => handleFilterChange(filter.label, e.target.value)}
                  disabled={disabled}
                />
              )}
              {filter.type === 'dropdown' && (
                <select onChange={(e) => handleFilterChange(filter.label, e.target.value)} disabled={disabled}>
                  {filter.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              {filter.type === 'date' && (
                <input
                  type="date"
                  onChange={(e) => handleFilterChange(filter.label, e.target.value)}
                  disabled={disabled}
                />
              )}
            </div>
          ))}
          <div className="filter-actions">
            <button onClick={handleApplyFilters} disabled={disabled}>Apply Filters</button>
            <button onClick={onClearFilters} disabled={disabled}>Clear Filters</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataFilterPanel;