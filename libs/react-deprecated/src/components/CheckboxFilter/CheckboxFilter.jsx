import React from 'react';
import PropTypes from 'prop-types';
import './CheckboxFilter.css';

const CheckboxFilter = ({ options, selectedOptions, onChange }) => {
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="checkbox-filter">
      {options.map((option) => (
        <label key={option} className="checkbox-label">
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="checkbox-input"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

CheckboxFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

CheckboxFilter.defaultProps = {
  selectedOptions: [],
};

export default CheckboxFilter;