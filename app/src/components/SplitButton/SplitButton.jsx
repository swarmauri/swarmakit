import React from 'react';
import PropTypes from 'prop-types';
import './SplitButton.css';

const SplitButton = ({ label, options, onOptionSelect }) => {
  return (
    <div className="split-button">
      <button className="main-button">{label}</button>
      <div className="dropdown">
        <button className="dropdown-toggle">&#9660;</button>
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <button
              key={index}
              className="dropdown-item"
              onClick={() => onOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

SplitButton.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onOptionSelect: PropTypes.func.isRequired,
};

export default SplitButton;