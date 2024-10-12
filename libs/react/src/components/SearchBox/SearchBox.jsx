// SearchBox.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

const SearchBox = ({ placeholder, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      type="text"
      className={`search-box ${isFocused ? 'focused' : 'unfocused'}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;