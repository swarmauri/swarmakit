import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ({ value, onChange, placeholder, isFocused, isDisabled }) => {
  return (
    <input
      type="text"
      className={`search-bar ${isFocused ? 'focused' : 'unfocused'} ${isDisabled ? 'disabled' : ''}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={isDisabled}
    />
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isFocused: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

SearchBar.defaultProps = {
  placeholder: 'Search...',
  isFocused: false,
  isDisabled: false,
};

export default SearchBar;