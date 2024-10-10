import React from 'react';
import PropTypes from 'prop-types';
import './ActionSheet.css';

const ActionSheet = ({ isOpen, options, onSelect }) => {
  return (
    <div className={`action-sheet ${isOpen ? 'open' : 'closed'}`}>
      {options.map((option, index) => (
        <button
          key={index}
          className="action-sheet-option"
          onClick={() => onSelect(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

ActionSheet.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ActionSheet;