import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

const RadioButton = ({ label, name, checked, onChange }) => {
  return (
    <label className="radio-button">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="radio-input"
      />
      <span className="radio-custom"></span>
      {label}
    </label>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;