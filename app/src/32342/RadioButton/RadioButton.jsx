import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

const RadioButton = ({ label, selected, onChange, disabled }) => {
  return (
    <label className="radio-button-container">
      <input
        type="radio"
        checked={selected}
        onChange={onChange}
        disabled={disabled}
        className="radio-button-input"
      />
      <span className={`radio-button-checkmark ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}></span>
      {label}
    </label>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

RadioButton.defaultProps = {
  selected: false,
  onChange: () => {},
  disabled: false,
};

export default RadioButton;