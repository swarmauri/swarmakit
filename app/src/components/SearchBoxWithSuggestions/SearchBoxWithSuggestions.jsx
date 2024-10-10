import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBoxWithSuggestions.css';

const SearchBoxWithSuggestions = ({ suggestions, onSearch }) => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
    onSearch(suggestion);
  };

  return (
    <div className="search-box-with-suggestions">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      {filteredSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SearchBoxWithSuggestions.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBoxWithSuggestions;