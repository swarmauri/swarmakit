import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropdownButton.css';

const DropdownButton = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__toggle" onClick={handleToggle}>
        {label}
      </button>
      {isOpen && (
        <ul className="dropdown__menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown__item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropdownButton.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default DropdownButton;