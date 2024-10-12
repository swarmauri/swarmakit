import React from 'react';
import PropTypes from 'prop-types';
import './MultiSelectDropdown.css';

const MultiSelectDropdown = ({ options, values, onChange, disabled }) => {
  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    onChange(selectedOptions);
  };

  return (
    <select
      className="multi-select-dropdown"
      multiple
      value={values}
      onChange={handleSelectChange}
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

MultiSelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

MultiSelectDropdown.defaultProps = {
  disabled: false,
};

export default MultiSelectDropdown;