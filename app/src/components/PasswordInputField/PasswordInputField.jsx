import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PasswordInputField.css';

const PasswordInputField = ({ label, placeholder, value, onChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="password-input-field">
      {label && <label className="password-label">{label}</label>}
      <div className="password-input-container">
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          className="password-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="toggle-visibility-button"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
};

PasswordInputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PasswordInputField;