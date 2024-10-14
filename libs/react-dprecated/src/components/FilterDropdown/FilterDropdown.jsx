import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #74b9ff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #b2bec3;
    cursor: not-allowed;
  }
`;

const DropdownContent = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const FilterDropdown = ({ options, onApply, onClear, disabled }) => {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    if (!disabled) setOpen(!open);
  };

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const applyFilters = () => {
    onApply(selectedOptions);
    setOpen(false);
  };

  const clearFilters = () => {
    setSelectedOptions([]);
    onClear();
    setOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown} disabled={disabled}>
        Filter
      </DropdownButton>
      <DropdownContent open={open}>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
            {selectedOptions.includes(option) ? `✓ ${option}` : option}
          </DropdownItem>
        ))}
        <DropdownItem onClick={applyFilters}>Apply</DropdownItem>
        <DropdownItem onClick={clearFilters}>Clear</DropdownItem>
      </DropdownContent>
    </DropdownWrapper>
  );
};

FilterDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onApply: PropTypes.func,
  onClear: PropTypes.func,
  disabled: PropTypes.bool,
};

FilterDropdown.defaultProps = {
  options: [],
  onApply: () => {},
  onClear: () => {},
  disabled: false,
};

export default FilterDropdown;