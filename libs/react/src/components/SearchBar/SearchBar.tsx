import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  state: 'focused' | 'unfocused' | 'typing' | 'empty' | 'filled' | 'searching' | 'cleared' | 'disabled';
  onSearch: (query: string) => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ state, onSearch, onClear }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onClear();
  };

  return (
    <div className={`search-bar ${state}`}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        disabled={state === 'disabled'}
        placeholder="Search..."
        aria-label="Search"
        className="search-input"
      />
      <button onClick={handleSearch} disabled={state === 'disabled'} className="search-button">
        Search
      </button>
      <button onClick={handleClear} disabled={state === 'disabled'} className="clear-button">
        Clear
      </button>
    </div>
  );
};

export default SearchBar;