import React from 'react';
import PropTypes from 'prop-types';
import './TextInputField.css';

const TextInputField = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="text-input-field">
      {label && <label className="input-label">{label}</label>}
      <input
        type="text"
        className="input-text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextInputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInputField;