import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PasswordConfirmationField.css';

const PasswordConfirmationField = ({ password, confirmPassword, onChange, disabled }) => {
  const [passwordInput, setPasswordInput] = useState(password);
  const [confirmPasswordInput, setConfirmPasswordInput] = useState(confirmPassword);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPasswordInput(newPassword);
    onChange(newPassword, confirmPasswordInput);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPasswordInput(newConfirmPassword);
    onChange(passwordInput, newConfirmPassword);
  };

  const isMatching = passwordInput === confirmPasswordInput;

  return (
    <div className="password-confirmation-container">
      <input
        className="password-input"
        type="password"
        value={passwordInput}
        onChange={handlePasswordChange}
        disabled={disabled}
        placeholder="Enter password"
      />
      <input
        className={`password-input ${isMatching ? 'matching' : 'not-matching'}`}
        type="password"
        value={confirmPasswordInput}
        onChange={handleConfirmPasswordChange}
        disabled={disabled}
        placeholder="Confirm password"
      />
    </div>
  );
};

PasswordConfirmationField.propTypes = {
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

PasswordConfirmationField.defaultProps = {
  password: '',
  confirmPassword: '',
  onChange: () => {},
  disabled: false,
};

export default PasswordConfirmationField;