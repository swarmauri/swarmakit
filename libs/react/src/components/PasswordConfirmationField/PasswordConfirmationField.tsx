import React, { useState } from 'react';

interface PasswordConfirmationFieldProps {
  disabled?: boolean;
}

const PasswordConfirmationField: React.FC<PasswordConfirmationFieldProps> = ({ disabled = false }) => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const isMatching = password === confirmPassword;

  return (
    <div className="password-confirmation-field" aria-disabled={disabled}>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={disabled}
        aria-label="Password"
      />
      <input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={disabled}
        aria-label="Confirm Password"
      />
      <span role="alert" className={`message ${isMatching ? 'matching' : 'not-matching'}`}>
        {isMatching ? 'Passwords match' : 'Passwords do not match'}
      </span>
    </div>
  );
};

export default PasswordConfirmationField;