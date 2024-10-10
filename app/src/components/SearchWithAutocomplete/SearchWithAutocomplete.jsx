import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchWithAutocomplete.css';

const SearchWithAutocomplete = ({ suggestions }) => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);

    const newFilteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setFilteredSuggestions(newFilteredSuggestions);
    setShowSuggestions(true);
  };

  const handleClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        onChange={handleChange}
        value={query}
        placeholder="Search..."
        className="search-input"
      />
      {showSuggestions && query && (
        <ul className="suggestions-list">
          {filteredSuggestions.length ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleClick(suggestion)}
                className="suggestion-item"
              >
                {suggestion}
              </li>
            ))
          ) : (
            <li className="no-suggestions">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

SearchWithAutocomplete.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchWithAutocomplete;