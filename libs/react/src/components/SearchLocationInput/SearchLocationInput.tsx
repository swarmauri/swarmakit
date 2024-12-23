import React, { useState } from 'react';
import './SearchLocationInput.css';

interface SearchLocationInputProps {
  placeholder: string;
  disabled?: boolean;
  onSearch: (query: string) => void;
}

const SearchLocationInput: React.FC<SearchLocationInputProps> = ({ placeholder, disabled, onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
    updateSuggestions(value);
  };

  const updateSuggestions = (value: string) => {
    if (value) {
      setSuggestions(['Location 1', 'Location 2', 'Location 3']);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className={`search-location-input ${disabled ? 'disabled' : ''}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        disabled={disabled}
        aria-label="Search for a location"
      />
      {suggestions.length > 0 && (
        <ul aria-label="Search suggestions">
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchLocationInput;