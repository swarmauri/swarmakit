import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #b2bec3;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  max-width: 400px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
  &:disabled {
    background-color: #dfe6e9;
  }
`;

const SearchButton = styled.button`
  background-color: #0984e3;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  &:disabled {
    background-color: #b2bec3;
    cursor: not-allowed;
  }
`;

const SearchBar = ({ placeholder, onSearch, disabled }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (!disabled) onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <SearchBarWrapper>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        disabled={disabled}
      />
      <SearchButton onClick={handleSearch} disabled={disabled || !query}>
        Search
      </SearchButton>
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  disabled: PropTypes.bool,
};

SearchBar.defaultProps = {
  placeholder: 'Search...',
  onSearch: () => {},
  disabled: false,
};

export default SearchBar;