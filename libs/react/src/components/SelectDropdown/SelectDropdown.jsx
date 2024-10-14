import React from 'react';
import PropTypes from 'prop-types';
import './SelectDropdown.css';

const SelectDropdown = ({ options, value, onChange, disabled }) => {
  return (
    <select
      className="select-dropdown"
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

SelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

SelectDropdown.defaultProps = {
  disabled: false,
};

export default SelectDropdown;