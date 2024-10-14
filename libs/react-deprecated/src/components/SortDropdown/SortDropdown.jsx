import React from 'react';
import PropTypes from 'prop-types';
import './SortDropdown.css';

const SortDropdown = ({ options, selectedOption, onChange }) => {
  const handleSelectChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="sort-dropdown">
      <select
        className="sort-select"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

SortDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SortDropdown.defaultProps = {
  selectedOption: '',
};

export default SortDropdown;