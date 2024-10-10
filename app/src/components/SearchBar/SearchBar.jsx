import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  transition: border-color 0.3s ease;

  ${({ isFocused }) =>
    isFocused &&
    `
    border-color: #1976d2;
  `}

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #e0e0e0;
    border-color: #bdbdbd;
  `}
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 0.5rem;
  background: transparent;

  &:disabled {
    background-color: #e0e0e0;
  }
`;

const SearchBar = ({ placeholder, isFocused, disabled }) => {
  return (
    <SearchBarContainer isFocused={isFocused} disabled={disabled}>
      <Input type="text" placeholder={placeholder} disabled={disabled} />
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  isFocused: PropTypes.bool,
  disabled: PropTypes.bool,
};

SearchBar.defaultProps = {
  placeholder: 'Search...',
  isFocused: false,
  disabled: false,
};

export default SearchBar;