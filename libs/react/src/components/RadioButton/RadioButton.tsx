import React from 'react';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked = false, disabled = false, onChange }) => {
  return (
    <label className="radio-button" aria-disabled={disabled}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(value)}
        aria-checked={checked}
        aria-label={label}
      />
      <span className="radio-label">{label}</span>
    </label>
  );
};

export default RadioButton;