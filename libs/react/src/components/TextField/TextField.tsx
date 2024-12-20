import React from 'react';
import './TextField.css';

interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  helperText?: string;
}

const TextField: React.FC<TextFieldProps> = ({ value, onChange, placeholder, disabled, readOnly, error, helperText }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly && !disabled) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="text-field">
      <input
        type="text"
        className={`input ${error ? 'error' : ''}`}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={error}
        aria-readonly={readOnly}
        aria-disabled={disabled}
        aria-describedby={helperText ? 'helper-text' : undefined}
      />
      {helperText && <span id="helper-text" className="helper-text">{helperText}</span>}
    </div>
  );
};

export default TextField;