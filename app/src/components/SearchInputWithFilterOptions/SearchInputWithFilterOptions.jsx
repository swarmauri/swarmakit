import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : '#fff')};
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  ${(props) => props.disabled && 'background-color: #f5f5f5;'}
`;

const FilterButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  ${(props) => props.disabled && 'background-color: #ccc; cursor: not-allowed;'}
`;

const SearchInputWithFilterOptions = ({ placeholder, filtersActive, disabled }) => {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!disabled) {
      // Placeholder for search logic
      setResults([]);
    }
  };

  return (
    <Wrapper disabled={disabled}>
      <Input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
      <FilterButton onClick={handleSearch} disabled={disabled}>
        {filtersActive ? 'Filters Active' : 'Search'}
      </FilterButton>
    </Wrapper>
  );
};

SearchInputWithFilterOptions.propTypes = {
  placeholder: PropTypes.string,
  filtersActive: PropTypes.bool,
  disabled: PropTypes.bool,
};

SearchInputWithFilterOptions.defaultProps = {
  placeholder: 'Search...',
  filtersActive: false,
  disabled: false,
};

export default SearchInputWithFilterOptions;