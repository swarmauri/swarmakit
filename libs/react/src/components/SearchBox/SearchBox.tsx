import React, { useState } from 'react';

interface SearchBoxProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder = 'Search...', onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      className="search-box"
      value={query}
      onChange={handleInputChange}
      placeholder={placeholder}
      aria-label="Search"
    />
  );
};

export default SearchBox;