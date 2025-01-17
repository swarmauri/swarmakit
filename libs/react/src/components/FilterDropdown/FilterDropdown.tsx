import React, { useState } from 'react';
import './FilterDropdown.css';

interface FilterDropdownProps {
  state: 'open' | 'closed' | 'applied' | 'cleared' | 'disabled';
  options: string[];
  onApply: (selected: string[]) => void;
  onClear: () => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ state, options, onApply, onClear }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleApply = () => {
    onApply(selectedOptions);
  };

  return (
    <div className={`filter-dropdown ${state}`}>
      <button disabled={state === 'disabled'} className="dropdown-toggle">
        {state === 'open' ? 'Close' : 'Open'} Filter
      </button>
      {state === 'open' && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div key={option} className="dropdown-option">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleSelect(option)}
                disabled={state === 'disabled'}
              />
              <label>{option}</label>
            </div>
          ))}
          <button onClick={handleApply} disabled={state === 'disabled'}>
            Apply
          </button>
          <button onClick={onClear} disabled={state === 'disabled'}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;