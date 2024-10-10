import React from 'react';
import PropTypes from 'prop-types';
import './ActionableListItemWithOptions.css';

const ActionableListItemWithOptions = ({ title, subtitle, options, onOptionSelect }) => {
  return (
    <div className="actionable-list-item">
      <div className="list-item-content">
        <h4 className="list-item-title">{title}</h4>
        <p className="list-item-subtitle">{subtitle}</p>
      </div>
      <div className="list-item-options">
        {options.map((option, index) => (
          <button 
            key={index} 
            className="list-item-option-button" 
            onClick={() => onOptionSelect(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

ActionableListItemWithOptions.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onOptionSelect: PropTypes.func,
};

ActionableListItemWithOptions.defaultProps = {
  subtitle: '',
  options: [],
  onOptionSelect: () => {},
};

export default ActionableListItemWithOptions;