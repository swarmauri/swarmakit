import React, { useState, ChangeEvent } from 'react';

interface SearchWithAutocompleteProps {
  suggestions: string[];
}

const SearchWithAutocomplete: React.FC<SearchWithAutocompleteProps> = ({ suggestions }) => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  return (
    <div className="search-with-autocomplete">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        aria-label="Search"
        placeholder="Search..."
      />
      {query && (
        <ul className="suggestions-list" role="listbox">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li key={index} role="option" tabIndex={0}>
                {suggestion}
              </li>
            ))
          ) : (
            <li role="option" tabIndex={0}>
              No Results
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchWithAutocomplete;