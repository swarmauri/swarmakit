import React, { useState, useEffect } from 'react';
import './SearchBarWithSuggestions.css';

interface SearchBarWithSuggestionsProps {
  suggestions: string[];
  onSearch: (query: string) => void;
}

const SearchBarWithSuggestions: React.FC<SearchBarWithSuggestionsProps> = ({ suggestions, onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (inputValue) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, suggestions]);

  return (
    <div className="search-bar-with-suggestions">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        placeholder="Search..."
        aria-label="Search input"
      />
      {showSuggestions && (
        <ul className="suggestions-list" aria-live="polite">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li key={index} onMouseDown={() => onSearch(suggestion)}>
                {suggestion}
              </li>
            ))
          ) : (
            <li className="no-results">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBarWithSuggestions;